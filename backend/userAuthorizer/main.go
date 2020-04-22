// Package joinGame provides functionality for joining a game
package main

import (
	"bizsim/user"
	"context"
	"errors"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func generatePolicy(sub string) (events.APIGatewayCustomAuthorizerResponse, error) {
	authResponse := events.APIGatewayCustomAuthorizerResponse{PrincipalID: sub}
	authResponse.PolicyDocument = events.APIGatewayCustomAuthorizerPolicy{
		Version: "2012-10-17",
		Statement: []events.IAMPolicyStatement{
			{ // TODO: Proper restrictions
				Action: []string{"*"},
				Effect: "Allow",
				Resource: []string{
					"*",
				},
			},
		},
	}
	authResponse.Context = map[string]interface{}{
		"userSub": sub,
	}
	return authResponse, nil
}

// authorizeUser function verifies that the calling user, who is identified
// by the accesstoken, has permission to access the service.
// If another user is given as a queryparam, verifies that the calling
// user has permission to access the data of the other user
// Required params:
// - event.Headers.Authorization
// Optional params:
// - event.QueryStringParameters.username
func authorizeUser(ctx context.Context, event events.APIGatewayCustomAuthorizerRequestTypeRequest) (events.APIGatewayCustomAuthorizerResponse, error) {
	var authorizeToken events.APIGatewayCustomAuthorizerResponse
	var userData user.Data
	username := event.QueryStringParameters["username"]

	sub, err := user.GetSub(event.Headers["authorization2"])
	if err == nil && username != "" {
		userData, err = user.GetData(sub.UserID)
	}

	if username != "" && username != userData.Username {
		err = errors.New("Unauthorized")
	}

	if err == nil {
		authorizeToken, err = generatePolicy(sub.UserID)
	}

	return authorizeToken, err
}

func main() {
	lambda.Start(authorizeUser)
}
