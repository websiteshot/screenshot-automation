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
<a style="margin: 1em;" href="https://websiteshot.app">Websiteshot</a> | <a style="margin: 1em;" href="https://github.com/websiteshot/community/discussions">Community</a> | <a style="margin: 1em;" href="https://docs.websiteshot.app">Documentation</a>
</div>

<hr />

## Introduction

This projects automates screenshot generation for the [Websiteshot Documentation](https://docs.websiteshot.app). All referenced screenshots are hosted in a Cloud Bucket (AWS S3). By updating the images in the Bucket the documentation instantly uses the updated screenshots.

### How does it work?

There are guarded and unguarded pages from which screenshots must be taken. The configuration of the URLs and the parameters can be found in the `index.ts`. When running the application, the following steps are performed:

1. Create a new screenshot job via Websiteshot.
2. Wait 1 minute until the jobs are processed.
3. Request the results using the `JobId`.
4. Download all generated screenshots locally.
5. Upload all screenshots to Cloud Bucket.

## Usage

You can run this program with your own Websiteshot account, as long as you have registered with email address and password. You also need an AWS account, an S3 bucket and an access key.

Set the following environment variables:

```bash
export PROJECT=...               # Websiteshot Project
export APIKEY=...                # Websiteshot API Key
export NODE_AUTH_TOKEN=...       # can be skipped if .npmrc will be removed
export AWS_ACCESS_KEY_ID=...     # AWS Access Key Id
export AWS_ACCESS_KEY_SECRET=... # AWS Access Key Secret
export AWS_BUCKET=...            # AWS S3 Bucket name
export NODE_ENV=local
export DOCS_USER=...             # E-Mail Address of Websiteshot User to log in
export DOCS_PASS=...             # Password of Websiteshot User to log in
export DOCS_PROJECT=...          # Project Id of Websiteshot User
```

## Bucket Policy for Public Access

That's the Bucket Policy you need to add if the images should be public by default:

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
