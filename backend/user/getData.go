// Package user provides functions related to user functions within Cognito
package user

import (
	"fmt"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

// Data type defines the output of the Sub function.
type Data struct {
	Sub       string
	Username  string
	Companies map[string]string
}

// GetData provides the user data that matches the given userSub.
// Required params:
// - userSub provided by Cognito
func GetData(userSub string) (Data, error) {
	tableName := "BizSimUsers"

	sess := session.Must(session.NewSessionWithOptions(session.Options{
		SharedConfigState: session.SharedConfigEnable,
	}))
	svc := dynamodb.New(sess)

	params := &dynamodb.GetItemInput{
		TableName: aws.String(tableName),
		Key: map[string]*dynamodb.AttributeValue{
			"Sub": {
				S: aws.String(userSub),
			},
		},
	}

	userData := Data{}
	result, err := svc.GetItem(params)
	if err == nil {
		err = dynamodbattribute.UnmarshalMap(result.Item, &userData)
	}

	if err != nil {
		fmt.Printf("Failed to unmarshal Record, %v", err)
	}
	return userData, err
}
