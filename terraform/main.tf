terraform {
  backend "remote" {
    hostname = "app.terraform.io"
    organization = "somaliika"

    workspaces {
      prefix = "serverless-"
    }
  }
}


