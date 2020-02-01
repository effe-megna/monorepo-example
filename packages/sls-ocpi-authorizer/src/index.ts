import { awesomeFn }  from "@ocpi/apilayers"
import pgp from "pg-promise" 
import { ALBCallback } from "aws-lambda"
import { getConnection } from "typeorm"

awesomeFn()
console.log(
  pgp({
    capSQL: true
  })
)
console.log(
  getConnection("123")
)
console.log("sls-ocpi-authorizer")