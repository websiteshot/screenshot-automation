# Screenshot Automation for Websiteshot Documentation

<hr />

<div align="center">
    <a href="https://websiteshot.app/">
        <img src="./assets/logo-mini.png">
    </a>
</div>

<div align="center">
<p>Never spend time again to create awesome screenshots of your websites.</p>
</div>

<div align="center">
<a style="margin: 1em;" href="https://websiteshot.app">Websiteshot</a> | <a style="margin: 1em;" href="https://docs.websiteshot.app">Documentation</a>
</div>

<hr />

## Bucket Policy for Public Access

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AddPerm",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET/*"
    }
  ]
}
```
