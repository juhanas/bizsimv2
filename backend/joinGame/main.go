// Package joinGame provides functionality for joining a game
package main

import (
	"bizsim/user"
	"context"
	"errors"

	"github.com/aws/aws-lambda-go/lambda"
)

type data struct {
	AccessToken string
	GameID      string
	CompanyName string
}

// joinGame function adds the requesting user to the given game.
// If the user has joined the game previously, no action is taken.
func joinGame(ctx context.Context, event data) error {
	sub, err := user.GetSub(event.AccessToken)

	var userData user.Data
	if err == nil {
		userData, err = user.GetData(sub.UserID)
	}

	if err == nil {
		_, exists := userData.Companies[event.GameID]
		if exists {
			err = errors.New("game: already joined")
		} else {
			var companies map[string]string
			// Must initialize table data, else DynamoDB will fail
			if userData.Companies == nil {
				companies = map[string]string{}
			} else {
				companies = userData.Companies
			}
			companies[event.GameID] = event.CompanyName
			newUserData := user.Data{
				Sub:       userData.Sub,
				Username:  userData.Username,
				Companies: companies,
			}
			err = user.PutData(newUserData)
		}
	}

	return err
}

func main() {
	lambda.Start(joinGame)
}
