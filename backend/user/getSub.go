// Package user provides functions related to user functions within Cognito
package user

import (
	"errors"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/cognitoidentityprovider"
)

// SubData type defines the output of the Sub function.
type SubData struct {
	UserID string
}

// GetSub provides the user sub identification token that matches the given accessToken
// Required params:
// - accessToken jwt provided by Cognito
func GetSub(accessToken string) (SubData, error) {
	sess := session.Must(session.NewSessionWithOptions(session.Options{
		SharedConfigState: session.SharedConfigEnable,
	}))
	svc := cognitoidentityprovider.New(sess)

	input := &cognitoidentityprovider.GetUserInput{
		AccessToken: aws.String(accessToken),
	}

	output, err := svc.GetUser(input)
	if err != nil {
		return SubData{}, errors.New("Not authorized")
	}

	sub := ""
	for _, item := range output.UserAttributes {
		if *item.Name == "sub" {
			sub = *item.Value
		}
	}

	outputData := SubData{
		UserID: sub,
	}

	return outputData, nil
}
