// Package user provides functions related to user functions within Cognito
package user

import (
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

// PutData puts the given user data to the Users table.
// Required params:
// - userData: Data
func PutData(userData Data) error {
	tableName := "BizSimUsers"

	sess := session.Must(session.NewSessionWithOptions(session.Options{
		SharedConfigState: session.SharedConfigEnable,
	}))
	svc := dynamodb.New(sess)

	userItem, err := dynamodbattribute.MarshalMap(userData)
	if err == nil {
		input := &dynamodb.PutItemInput{
			Item:      userItem,
			TableName: aws.String(tableName),
		}

		_, err = svc.PutItem(input)
	}

	return err
}
