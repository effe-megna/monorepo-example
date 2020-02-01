import { awesomeFn }  from "@ocpi/apilayers"
import pgp from "pg-promise" 
import { ALBCallback } from "aws-lambda"

awesomeFn()
console.log(
  pgp({
    capSQL: true
  })
)
console.log("sls-ocpi-authorizer")