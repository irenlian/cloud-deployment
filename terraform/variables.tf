variable "environment" {
  type        = string
  description = "The logical environment where this is being deployed."
}

variable "application" {
  type        = string
  default     = "serverless"
  description = "Solution name"
}

variable "tags" {
  type        = map
  default     = {}
  description = "Additional tags (e.g. `map('BusinessUnit','XYZ')`"
}

variable "enabled" {
  type        = string
  default     = "true"
  description = "Set to false to prevent the module from creating any resources"
}
resource "aws_iam_user" "serverless" {
  name = "module.base_label.id"

  tags = "merge(module.base_label.tags, map("Type", "service"))"
}
