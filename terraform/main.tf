terraform {
  backend "remote" {
    hostname = "app.terraform.io"
    organization = "somaliika"

    workspaces {
      prefix = "serverless-"
    }
  }
}


module "base_label" {
  source      = "git::https://github.com/cloudposse/terraform-null-label.git?ref=tags/0.16.0"
  environment = "${var.environment}"
  name        = "${var.application}"
  tags        = "${merge(var.tags, map("Application", var.application))}"
  enabled     = "${var.enabled}"
}

module "dynamodb_table" {
  source = "git::https://github.com/cloudposse/terraform-aws-dynamodb?ref=tags/0.15.0"

  name                          = "${var.application}-${var.environment}-dynamodb"
  environment                   = "${var.environment}"
  billing_mode                  = "PAY_PER_REQUEST"
  enable_streams                = false
  enable_encryption             = true
  enable_point_in_time_recovery = true
  hash_key                      = "path"
  hash_key_type                 = "S"

  dynamodb_attributes = [
    {
      name = "path"
      type = "S"
    },
  ]

  ttl_attribute = "expiration_date"

  tags = "${module.base_label.tags}"
}
