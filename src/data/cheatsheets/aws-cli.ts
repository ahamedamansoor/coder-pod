import { Code } from 'lucide-react';

export const awsCliCheatsheet = {
  id: 'aws-cli',
  name: 'AWS CLI',
  description: 'Master AWS CLI from basics to expert operations (2024 Edition)',
  icon: Code,
  colorTheme: 'orange' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with AWS CLI',
      commands: [
        {
          command: 'AWS CLI Overview',
          description: 'Introduction to AWS CLI concepts',
          usage: 'Understanding AWS CLI fundamentals',
          example: `AWS CLI Overview:
- Official command-line tool for AWS
- Manage all AWS services from terminal
- Automate cloud operations
- Scriptable and integratable
- Cross-platform support

Key Features:
- Service management
- Resource provisioning
- Monitoring and logging
- Security and IAM operations
- Data transfer and synchronization

Supported Platforms:
- Windows (PowerShell, CMD)
- macOS (Terminal, zsh, bash)
- Linux (bash, zsh, fish)
- Docker containers`,
        },
        {
          command: 'CLI Components',
          description: 'Main AWS CLI components',
          usage: 'Understanding CLI structure',
          example: `CLI Components:
- aws: Main command
- configure: Configuration setup
- s3: S3 operations
- ec2: EC2 management
- iam: Identity and Access Management
- cloudformation: Infrastructure as Code

Prerequisites:
- AWS account
- IAM user with appropriate permissions
- Access Key ID and Secret Access Key
- Internet connectivity`,
        },
        {
          command: 'Install with Homebrew',
          description: 'Install AWS CLI on macOS using Homebrew',
          usage: 'macOS installation',
          example: `brew install awscli`,
        },
        {
          command: 'Install with Bundled Installer macOS',
          description: 'Install AWS CLI on macOS using bundled installer',
          usage: 'macOS bundled installation',
          example: `curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /`,
        },
        {
          command: 'Install with Bundled Installer Linux',
          description: 'Install AWS CLI on Linux using bundled installer',
          usage: 'Linux bundled installation',
          example: `curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install`,
        },
        {
          command: 'Install with pip',
          description: 'Install AWS CLI using pip',
          usage: 'Python package installation',
          example: `pip3 install awscli --upgrade --user`,
        },
        {
          command: 'Install with Chocolatey',
          description: 'Install AWS CLI on Windows using Chocolatey',
          usage: 'Windows Chocolatey installation',
          example: `choco install awscli`,
        },
        {
          command: 'Install with MSI',
          description: 'Install AWS CLI on Windows using MSI installer',
          usage: 'Windows MSI installation',
          example: `# Download from: https://aws.amazon.com/cli/`,
        },
        {
          command: 'Verify Installation',
          description: 'Check AWS CLI installation',
          usage: 'Installation verification',
          example: `aws --version                    # Show CLI version
aws --help                       # Show help
which aws                        # Show installation path`,
        },
        {
          command: 'Update AWS CLI Homebrew',
          description: 'Update AWS CLI using Homebrew',
          usage: 'macOS update',
          example: `brew upgrade awscli`,
        },
        {
          command: 'Update AWS CLI Linux',
          description: 'Update AWS CLI on Linux',
          usage: 'Linux update',
          example: `curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install --update`,
        },
        {
          command: 'Uninstall AWS CLI Homebrew',
          description: 'Uninstall AWS CLI using Homebrew',
          usage: 'macOS uninstall',
          example: `brew uninstall awscli`,
        },
        {
          command: 'Uninstall AWS CLI Linux',
          description: 'Uninstall AWS CLI on Linux',
          usage: 'Linux uninstall',
          example: `sudo rm -rf /usr/local/aws-cli
sudo rm /usr/local/bin/aws`,
        },
        {
          command: 'Docker Usage',
          description: 'Use AWS CLI with Docker',
          usage: 'Docker-based CLI',
          example: `docker run --rm -it amazon/aws-cli --version`,
        },
        {
          command: 'AWS CloudShell',
          description: 'Use AWS CLI in CloudShell',
          usage: 'Cloud-based CLI',
          example: `# Pre-installed in AWS Console
aws --version`,
        },
        {
          command: 'Basic Configuration',
          description: 'Configure AWS CLI interactively',
          usage: 'Interactive setup',
          example: `aws configure                   # Interactive configuration
aws configure --profile dev     # Configure named profile`,
        },
        {
          command: 'Manual Configuration',
          description: 'Configure AWS CLI manually',
          usage: 'Manual setup',
          example: `aws configure set aws_access_key_id AKIAIOSFODNN7EXAMPLE
aws configure set aws_secret_access_key wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
aws configure set default.region us-west-2
aws configure set default.output json`,
        },
        {
          command: 'Profile Configuration',
          description: 'Configure named profiles',
          usage: 'Multiple profiles',
          example: `aws configure set profile.dev.aws_access_key_id AKIAI44QH8DHBEXAMPLE
aws configure set profile.dev.aws_secret_access_key je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY
aws configure set profile.dev.region us-east-1
aws configure set profile.dev.output text`,
        },
        {
          command: 'Configuration Files',
          description: 'Understand AWS CLI configuration files',
          usage: 'File-based configuration',
          example: `# ~/.aws/config
[default]
region = us-west-2
output = json

[profile dev]
region = us-east-1
output = text

# ~/.aws/credentials
[default]
aws_access_key_id = AKIAIOSFODNN7EXAMPLE
aws_secret_access_key = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

[dev]
aws_access_key_id = AKIAI44QH8DHBEXAMPLE
aws_secret_access_key = je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY`,
        },
        {
          command: 'Environment Variables',
          description: 'Configure using environment variables',
          usage: 'Environment-based configuration',
          example: `export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
export AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
export AWS_DEFAULT_REGION=us-west-2
export AWS_DEFAULT_OUTPUT=json
export AWS_PROFILE=dev`,
        },
        {
          command: 'List Configuration',
          description: 'View current configuration',
          usage: 'Configuration inspection',
          example: `aws configure list               # List configuration
aws configure list profile dev   # List specific profile
aws configure get region         # Get specific setting`,
        },
        {
          command: 'Set Configuration',
          description: 'Set specific configuration values',
          usage: 'Configuration modification',
          example: `aws configure set region us-east-1  # Set specific setting`,
        },
        {
          command: 'Use Profile',
          description: 'Use specific profile for commands',
          usage: 'Profile-based execution',
          example: `aws s3 ls --profile dev         # Use specific profile
export AWS_PROFILE=dev          # Set default profile
aws s3 ls                       # Uses dev profile`,
        },
        {
          command: 'General Help',
          description: 'Get AWS CLI help',
          usage: 'Help system',
          example: `aws help                        # General help
aws help s3                     # Service-specific help
aws s3 help                     # S3 command help
aws s3 ls help                  # Subcommand help`,
        },
        {
          command: 'Basic Service Operations',
          description: 'Basic operations across AWS services',
          usage: 'Service interaction',
          example: `aws ec2 describe-instances      # List EC2 instances
aws s3 ls                       # List S3 buckets
aws iam list-users              # List IAM users
aws lambda list-functions       # List Lambda functions`,
        },
        {
          command: 'Output Formats',
          description: 'Control AWS CLI output format',
          usage: 'Output formatting',
          example: `aws s3 ls --output json         # JSON output
aws s3 ls --output text         # Text output
aws s3 ls --output table        # Table output
aws s3 ls --query "Buckets[0].Name"  # JMESPath query`,
        },
        {
          command: 'Filtering Results',
          description: 'Filter AWS CLI results',
          usage: 'Result filtering',
          example: `aws ec2 describe-instances --filters "Name=instance-type,Values=t2.micro"
aws ec2 describe-instances --query "Reservations[].Instances[].[InstanceId,State.Name]"
aws s3api list-buckets --query "Buckets[].Name"`,
        },
        {
          command: 'Pagination Control',
          description: 'Control pagination of results',
          usage: 'Result pagination',
          example: `aws ec2 describe-instances --max-items 10
aws ec2 describe-instances --starting-token token`,
        },
        {
          command: 'Region Operations',
          description: 'Work with different AWS regions',
          usage: 'Region management',
          example: `aws configure set region us-east-1
aws s3 ls --region us-west-2
aws ec2 describe-regions         # List available regions`,
        },
        {
          command: 'Dry Run Testing',
          description: 'Test commands without executing',
          usage: 'Safe testing',
          example: `aws ec2 run-instances --dry-run --image-id ami-12345678 --count 1`,
        },
        {
          command: 'Debug Mode',
          description: 'Enable debug output for troubleshooting',
          usage: 'Debugging',
          example: `aws s3 ls --debug               # Debug information
aws s3 ls --cli-read-timeout 60 # Set timeout`,
        },
        {
          command: 'Command Line Tips',
          description: 'Tips for using AWS CLI effectively',
          usage: 'CLI best practices',
          example: `# Use quotes for values with spaces
aws s3 cp "my file.txt" s3://bucket/

# Use @ for file input
aws dynamodb update-table --cli-input-json file://config.json

# Use --generate-cli-skeleton
aws ec2 run-instances --generate-cli-skeleton

# Use tab completion (if enabled)
aws s3 <TAB>                    # Show available subcommands`,
        },
      ],
    },
    {
      title: 'Core AWS Services - EC2',
      commands: [
        {
          command: 'List All EC2 Instances',
          description: 'List all EC2 instances in the region',
          usage: 'Instance enumeration',
          example: `aws ec2 describe-instances`,
        },
        {
          command: 'Describe Specific Instance',
          description: 'Get details for specific EC2 instance',
          usage: 'Instance details',
          example: `aws ec2 describe-instances --instance-ids i-1234567890abcdef0`,
        },
        {
          command: 'Filter Running Instances',
          description: 'List only running EC2 instances',
          usage: 'Instance filtering',
          example: `aws ec2 describe-instances --filters "Name=instance-state-name,Values=running"`,
        },
        {
          command: 'Launch Basic EC2 Instance',
          description: 'Launch a basic EC2 instance',
          usage: 'Instance creation',
          example: `aws ec2 run-instances \\
    --image-id ami-12345678 \\
    --instance-type t2.micro \\
    --key-name my-key-pair \\
    --security-group-ids sg-903004f8 \\
    --subnet-id subnet-6e7f829e \\
    --user-data file://user-data.txt`,
        },
        {
          command: 'Stop EC2 Instance',
          description: 'Stop a running EC2 instance',
          usage: 'Instance lifecycle',
          example: `aws ec2 stop-instances --instance-ids i-1234567890abcdef0`,
        },
        {
          command: 'Start EC2 Instance',
          description: 'Start a stopped EC2 instance',
          usage: 'Instance lifecycle',
          example: `aws ec2 start-instances --instance-ids i-1234567890abcdef0`,
        },
        {
          command: 'Reboot EC2 Instance',
          description: 'Reboot an EC2 instance',
          usage: 'Instance management',
          example: `aws ec2 reboot-instances --instance-ids i-1234567890abcdef0`,
        },
        {
          command: 'Terminate EC2 Instance',
          description: 'Terminate an EC2 instance',
          usage: 'Instance lifecycle',
          example: `aws ec2 terminate-instances --instance-ids i-1234567890abcdef0`,
        },
        {
          command: 'Describe Instance Types',
          description: 'Get information about EC2 instance types',
          usage: 'Instance type details',
          example: `aws ec2 describe-instance-types --instance-types t2.micro`,
        },
        {
          command: 'Describe AMI Images',
          description: 'List available AMI images',
          usage: 'AMI management',
          example: `aws ec2 describe-images --owners self`,
        },
        {
          command: 'Get Specific AMI',
          description: 'Get details for specific AMI',
          usage: 'AMI details',
          example: `aws ec2 describe-images --image-ids ami-12345678`,
        },
        {
          command: 'List Security Groups',
          description: 'List all security groups',
          usage: 'Security group management',
          example: `aws ec2 describe-security-groups`,
        },
        {
          command: 'Create Security Group',
          description: 'Create a new security group',
          usage: 'Security group creation',
          example: `aws ec2 create-security-group --group-name my-sg --description "My security group"`,
        },
        {
          command: 'Authorize Security Group Ingress',
          description: 'Add inbound rule to security group',
          usage: 'Security group rules',
          example: `aws ec2 authorize-security-group-ingress --group-id sg-903004f8 --protocol tcp --port 22 --cidr 0.0.0.0/0`,
        },
        {
          command: 'List Key Pairs',
          description: 'List all EC2 key pairs',
          usage: 'Key pair management',
          example: `aws ec2 describe-key-pairs`,
        },
        {
          command: 'Create Key Pair',
          description: 'Create a new EC2 key pair',
          usage: 'Key pair creation',
          example: `aws ec2 create-key-pair --key-name my-key --query "KeyMaterial" --output text > my-key.pem`,
        },
        {
          command: 'Delete Key Pair',
          description: 'Delete an EC2 key pair',
          usage: 'Key pair management',
          example: `aws ec2 delete-key-pair --key-name my-key`,
        },
        {
          command: 'List EBS Volumes',
          description: 'List all EBS volumes',
          usage: 'Volume management',
          example: `aws ec2 describe-volumes`,
        },
        {
          command: 'Create EBS Volume',
          description: 'Create a new EBS volume',
          usage: 'Volume creation',
          example: `aws ec2 create-volume --size 10 --volume-type gp2 --availability-zone us-east-1a`,
        },
        {
          command: 'Attach EBS Volume',
          description: 'Attach EBS volume to EC2 instance',
          usage: 'Volume attachment',
          example: `aws ec2 attach-volume --volume-id vol-1234567890abcdef0 --instance-id i-1234567890abcdef0 --device /dev/sdh`,
        },
        {
          command: 'List Snapshots',
          description: 'List all EBS snapshots',
          usage: 'Snapshot management',
          example: `aws ec2 describe-snapshots`,
        },
        {
          command: 'Create Snapshot',
          description: 'Create EBS snapshot',
          usage: 'Snapshot creation',
          example: `aws ec2 create-snapshot --volume-id vol-1234567890abcdef0 --description "My snapshot"`,
        },
        {
          command: 'Delete Snapshot',
          description: 'Delete EBS snapshot',
          usage: 'Snapshot management',
          example: `aws ec2 delete-snapshot --snapshot-id snap-1234567890abcdef0`,
        },
        {
          command: 'Enable Monitoring',
          description: 'Enable detailed monitoring for EC2 instance',
          usage: 'Instance monitoring',
          example: `aws ec2 monitor-instances --instance-ids i-1234567890abcdef0`,
        },
        {
          command: 'Disable Monitoring',
          description: 'Disable detailed monitoring for EC2 instance',
          usage: 'Instance monitoring',
          example: `aws ec2 unmonitor-instances --instance-ids i-1234567890abcdef0`,
        },
      ],
    },
    {
      title: 'Core AWS Services - S3',
      commands: [
        {
          command: 'List S3 Buckets',
          description: 'List all S3 buckets',
          usage: 'Bucket enumeration',
          example: `aws s3 ls`,
        },
        {
          command: 'List Bucket Contents',
          description: 'List contents of specific S3 bucket',
          usage: 'Bucket contents',
          example: `aws s3 ls s3://my-bucket`,
        },
        {
          command: 'Create S3 Bucket',
          description: 'Create a new S3 bucket',
          usage: 'Bucket creation',
          example: `aws s3 mb s3://my-new-bucket`,
        },
        {
          command: 'Remove Empty Bucket',
          description: 'Remove empty S3 bucket',
          usage: 'Bucket deletion',
          example: `aws s3 rb s3://my-bucket`,
        },
        {
          command: 'Force Remove Bucket',
          description: 'Remove S3 bucket and all contents',
          usage: 'Force bucket deletion',
          example: `aws s3 rb s3://my-bucket --force`,
        },
        {
          command: 'Upload File to S3',
          description: 'Upload file to S3 bucket',
          usage: 'File upload',
          example: `aws s3 cp file.txt s3://my-bucket/`,
        },
        {
          command: 'Download File from S3',
          description: 'Download file from S3 bucket',
          usage: 'File download',
          example: `aws s3 cp s3://my-bucket/file.txt ./`,
        },
        {
          command: 'Move File in S3',
          description: 'Move file within S3 or to/from S3',
          usage: 'File movement',
          example: `aws s3 mv s3://my-bucket/file.txt ./`,
        },
        {
          command: 'Delete S3 File',
          description: 'Delete file from S3 bucket',
          usage: 'File deletion',
          example: `aws s3 rm s3://my-bucket/file.txt`,
        },
        {
          command: 'Sync Directory to S3',
          description: 'Sync local directory to S3 bucket',
          usage: 'Directory synchronization',
          example: `aws s3 sync ./local-dir s3://my-bucket/`,
        },
        {
          command: 'Sync S3 to Local',
          description: 'Sync S3 bucket to local directory',
          usage: 'Directory synchronization',
          example: `aws s3 sync s3://my-bucket/ ./local-dir`,
        },
        {
          command: 'Sync with Delete',
          description: 'Sync and delete remote files not in local',
          usage: 'Clean synchronization',
          example: `aws s3 sync ./local-dir s3://my-bucket/ --delete`,
        },
        {
          command: 'Recursive Copy',
          description: 'Copy directory recursively to S3',
          usage: 'Recursive operations',
          example: `aws s3 cp --recursive ./dir s3://my-bucket/`,
        },
        {
          command: 'Recursive List',
          description: 'List S3 bucket contents recursively',
          usage: 'Recursive listing',
          example: `aws s3 ls --recursive s3://my-bucket/`,
        },
        {
          command: 'Create Bucket with S3API',
          description: 'Create S3 bucket using S3API',
          usage: 'Advanced bucket creation',
          example: `aws s3api create-bucket --bucket my-bucket --region us-east-1`,
        },
        {
          command: 'Delete Bucket with S3API',
          description: 'Delete S3 bucket using S3API',
          usage: 'Advanced bucket deletion',
          example: `aws s3api delete-bucket --bucket my-bucket`,
        },
        {
          command: 'Check Bucket Exists',
          description: 'Check if S3 bucket exists',
          usage: 'Bucket validation',
          example: `aws s3api head-bucket --bucket my-bucket`,
        },
        {
          command: 'Get Object Metadata',
          description: 'Get metadata for S3 object',
          usage: 'Object metadata',
          example: `aws s3api head-object --bucket my-bucket --key file.txt`,
        },
        {
          command: 'Download Object with S3API',
          description: 'Download S3 object using S3API',
          usage: 'Advanced download',
          example: `aws s3api get-object --bucket my-bucket --key file.txt output.txt`,
        },
        {
          command: 'Upload Object with S3API',
          description: 'Upload object using S3API',
          usage: 'Advanced upload',
          example: `aws s3api put-object --bucket my-bucket --key file.txt --body file.txt`,
        },
        {
          command: 'Get Bucket Policy',
          description: 'Get S3 bucket policy',
          usage: 'Policy management',
          example: `aws s3api get-bucket-policy --bucket my-bucket`,
        },
        {
          command: 'Set Bucket Policy',
          description: 'Set S3 bucket policy',
          usage: 'Policy management',
          example: `aws s3api put-bucket-policy --bucket my-bucket --policy file://policy.json`,
        },
        {
          command: 'Delete Bucket Policy',
          description: 'Delete S3 bucket policy',
          usage: 'Policy management',
          example: `aws s3api delete-bucket-policy --bucket my-bucket`,
        },
        {
          command: 'Get Bucket Versioning',
          description: 'Get S3 bucket versioning status',
          usage: 'Versioning management',
          example: `aws s3api get-bucket-versioning --bucket my-bucket`,
        },
        {
          command: 'Enable Bucket Versioning',
          description: 'Enable versioning on S3 bucket',
          usage: 'Versioning management',
          example: `aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Enabled`,
        },
        {
          command: 'Set Bucket Encryption',
          description: 'Set encryption on S3 bucket',
          usage: 'Encryption configuration',
          example: `aws s3api put-bucket-encryption --bucket my-bucket --server-side-encryption-configuration file://encryption.json`,
        },
        {
          command: 'Get Bucket Encryption',
          description: 'Get S3 bucket encryption settings',
          usage: 'Encryption management',
          example: `aws s3api get-bucket-encryption --bucket my-bucket`,
        },
      ],
    },
    {
      title: 'Core AWS Services - IAM',
      commands: [
        {
          command: 'List IAM Users',
          description: 'List all IAM users',
          usage: 'User enumeration',
          example: `aws iam list-users`,
        },
        {
          command: 'Get IAM User',
          description: 'Get details for specific IAM user',
          usage: 'User details',
          example: `aws iam get-user --user-name myuser`,
        },
        {
          command: 'Create IAM User',
          description: 'Create new IAM user',
          usage: 'User creation',
          example: `aws iam create-user --user-name newuser`,
        },
        {
          command: 'Delete IAM User',
          description: 'Delete IAM user',
          usage: 'User management',
          example: `aws iam delete-user --user-name myuser`,
        },
        {
          command: 'List Access Keys',
          description: 'List access keys for user',
          usage: 'Access key management',
          example: `aws iam list-access-keys --user-name myuser`,
        },
        {
          command: 'Create Access Key',
          description: 'Create access key for user',
          usage: 'Access key creation',
          example: `aws iam create-access-key --user-name myuser`,
        },
        {
          command: 'Delete Access Key',
          description: 'Delete access key for user',
          usage: 'Access key management',
          example: `aws iam delete-access-key --user-name myuser --access-key-id AKIAI44QH8DHBEXAMPLE`,
        },
        {
          command: 'Update Access Key Status',
          description: 'Activate or deactivate access key',
          usage: 'Access key management',
          example: `aws iam update-access-key --user-name myuser --access-key-id AKIAI44QH8DHBEXAMPLE --status Inactive`,
        },
        {
          command: 'List IAM Groups',
          description: 'List all IAM groups',
          usage: 'Group enumeration',
          example: `aws iam list-groups`,
        },
        {
          command: 'Create IAM Group',
          description: 'Create new IAM group',
          usage: 'Group creation',
          example: `aws iam create-group --group-name mygroup`,
        },
        {
          command: 'Delete IAM Group',
          description: 'Delete IAM group',
          usage: 'Group management',
          example: `aws iam delete-group --group-name mygroup`,
        },
        {
          command: 'Add User to Group',
          description: 'Add user to IAM group',
          usage: 'Group membership',
          example: `aws iam add-user-to-group --group-name mygroup --user-name myuser`,
        },
        {
          command: 'Remove User from Group',
          description: 'Remove user from IAM group',
          usage: 'Group membership',
          example: `aws iam remove-user-from-group --group-name mygroup --user-name myuser`,
        },
        {
          command: 'Get IAM Group',
          description: 'Get details for IAM group',
          usage: 'Group details',
          example: `aws iam get-group --group-name mygroup`,
        },
        {
          command: 'List IAM Roles',
          description: 'List all IAM roles',
          usage: 'Role enumeration',
          example: `aws iam list-roles`,
        },
        {
          command: 'Create IAM Role',
          description: 'Create new IAM role',
          usage: 'Role creation',
          example: `aws iam create-role --role-name myrole --assume-role-policy-document file://trust-policy.json`,
        },
        {
          command: 'Delete IAM Role',
          description: 'Delete IAM role',
          usage: 'Role management',
          example: `aws iam delete-role --role-name myrole`,
        },
        {
          command: 'Get IAM Role',
          description: 'Get details for IAM role',
          usage: 'Role details',
          example: `aws iam get-role --role-name myrole`,
        },
        {
          command: 'List IAM Policies',
          description: 'List all IAM policies',
          usage: 'Policy enumeration',
          example: `aws iam list-policies`,
        },
        {
          command: 'Create IAM Policy',
          description: 'Create new IAM policy',
          usage: 'Policy creation',
          example: `aws iam create-policy --policy-name MyPolicy --policy-document file://policy.json`,
        },
        {
          command: 'Delete IAM Policy',
          description: 'Delete IAM policy',
          usage: 'Policy management',
          example: `aws iam delete-policy --policy-arn arn:aws:iam::123456789012:policy/MyPolicy`,
        },
        {
          command: 'Get IAM Policy',
          description: 'Get details for IAM policy',
          usage: 'Policy details',
          example: `aws iam get-policy --policy-arn arn:aws:iam::123456789012:policy/MyPolicy`,
        },
        {
          command: 'Attach User Policy',
          description: 'Attach policy to IAM user',
          usage: 'Policy attachment',
          example: `aws iam attach-user-policy --user-name myuser --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess`,
        },
        {
          command: 'Detach User Policy',
          description: 'Detach policy from IAM user',
          usage: 'Policy detachment',
          example: `aws iam detach-user-policy --user-name myuser --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess`,
        },
        {
          command: 'Attach Role Policy',
          description: 'Attach policy to IAM role',
          usage: 'Policy attachment',
          example: `aws iam attach-role-policy --role-name myrole --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess`,
        },
        {
          command: 'Attach Group Policy',
          description: 'Attach policy to IAM group',
          usage: 'Policy attachment',
          example: `aws iam attach-group-policy --group-name mygroup --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess`,
        },
      ],
    },
    {
      title: 'Core AWS Services - Lambda',
      commands: [
        {
          command: 'List Lambda Functions',
          description: 'List all Lambda functions',
          usage: 'Function enumeration',
          example: `aws lambda list-functions`,
        },
        {
          command: 'Get Lambda Function',
          description: 'Get details for specific Lambda function',
          usage: 'Function details',
          example: `aws lambda get-function --function-name my-function`,
        },
        {
          command: 'Create Lambda Function',
          description: 'Create new Lambda function',
          usage: 'Function creation',
          example: `aws lambda create-function \\
    --function-name my-function \\
    --runtime python3.9 \\
    --role arn:aws:iam::123456789012:role/lambda-execution-role \\
    --handler index.handler \\
    --zip-file fileb://function.zip`,
        },
        {
          command: 'Delete Lambda Function',
          description: 'Delete Lambda function',
          usage: 'Function management',
          example: `aws lambda delete-function --function-name my-function`,
        },
        {
          command: 'Update Lambda Code',
          description: 'Update Lambda function code',
          usage: 'Function update',
          example: `aws lambda update-function-code --function-name my-function --zip-file fileb://new-function.zip`,
        },
        {
          command: 'Update Lambda Configuration',
          description: 'Update Lambda function configuration',
          usage: 'Function configuration',
          example: `aws lambda update-function-configuration --function-name my-function --runtime python3.9 --timeout 30`,
        },
        {
          command: 'Publish Lambda Version',
          description: 'Publish new version of Lambda function',
          usage: 'Version management',
          example: `aws lambda publish-version --function-name my-function`,
        },
        {
          command: 'List Lambda Versions',
          description: 'List versions of Lambda function',
          usage: 'Version enumeration',
          example: `aws lambda list-versions-by-function --function-name my-function`,
        },
        {
          command: 'Create Lambda Alias',
          description: 'Create alias for Lambda function version',
          usage: 'Alias management',
          example: `aws lambda create-alias --function-name my-function --name PROD --function-version 1`,
        },
        {
          command: 'Update Lambda Alias',
          description: 'Update Lambda alias to point to different version',
          usage: 'Alias management',
          example: `aws lambda update-alias --function-name my-function --name PROD --function-version 2`,
        },
        {
          command: 'Invoke Lambda Function',
          description: 'Invoke Lambda function',
          usage: 'Function execution',
          example: `aws lambda invoke --function-name my-function outputfile.txt`,
        },
        {
          command: 'Invoke Lambda with Payload',
          description: 'Invoke Lambda function with input payload',
          usage: 'Function with input',
          example: `aws lambda invoke --function-name my-function --payload file://input.json outputfile.txt`,
        },
        {
          command: 'Invoke Lambda with Logs',
          description: 'Invoke Lambda function and get logs',
          usage: 'Function with logs',
          example: `aws lambda invoke --function-name my-function --log-type Tail outputfile.txt`,
        },
        {
          command: 'Get Lambda Environment Variables',
          description: 'Get environment variables for Lambda function',
          usage: 'Environment management',
          example: `aws lambda get-function-configuration --function-name my-function --query "Environment.Variables"`,
        },
        {
          command: 'Update Lambda Environment Variables',
          description: 'Update environment variables for Lambda function',
          usage: 'Environment management',
          example: `aws lambda update-function-configuration --function-name my-function --environment Variables="{KEY1=VALUE1,KEY2=VALUE2}"`,
        },
        {
          command: 'List Lambda Layers',
          description: 'List all Lambda layers',
          usage: 'Layer enumeration',
          example: `aws lambda list-layers`,
        },
        {
          command: 'Publish Lambda Layer',
          description: 'Publish new Lambda layer',
          usage: 'Layer creation',
          example: `aws lambda publish-layer-version --layer-name my-layer --zip-file fileb://layer.zip --compatible-runtimes python3.9`,
        },
        {
          command: 'List Lambda Layer Versions',
          description: 'List versions of Lambda layer',
          usage: 'Layer versions',
          example: `aws lambda list-layer-versions --layer-name my-layer`,
        },
        {
          command: 'Get Lambda Concurrency',
          description: 'Get reserved concurrency for Lambda function',
          usage: 'Concurrency management',
          example: `aws lambda get-function-concurrency --function-name my-function`,
        },
        {
          command: 'Set Lambda Concurrency',
          description: 'Set reserved concurrency for Lambda function',
          usage: 'Concurrency management',
          example: `aws lambda put-function-concurrency --function-name my-function --reserved-concurrent-executions 10`,
        },
        {
          command: 'Delete Lambda Concurrency',
          description: 'Remove reserved concurrency from Lambda function',
          usage: 'Concurrency management',
          example: `aws lambda delete-function-concurrency --function-name my-function`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Intermediate Services - RDS',
      commands: [
        {
          command: 'List RDS Instances',
          description: 'List all RDS DB instances',
          usage: 'Database enumeration',
          example: `aws rds describe-db-instances`,
        },
        {
          command: 'Get RDS Instance',
          description: 'Get details for specific RDS instance',
          usage: 'Database details',
          example: `aws rds describe-db-instances --db-instance-identifier mydb`,
        },
        {
          command: 'Create RDS Instance',
          description: 'Create new RDS DB instance',
          usage: 'Database creation',
          example: `aws rds create-db-instance \\
    --db-instance-identifier mydb \\
    --db-instance-class db.t3.micro \\
    --engine mysql \\
    --master-username admin \\
    --master-user-password mypassword \\
    --allocated-storage 20`,
        },
        {
          command: 'Delete RDS Instance',
          description: 'Delete RDS DB instance',
          usage: 'Database deletion',
          example: `aws rds delete-db-instance --db-instance-identifier mydb --skip-final-snapshot`,
        },
        {
          command: 'Stop RDS Instance',
          description: 'Stop RDS DB instance',
          usage: 'Database lifecycle',
          example: `aws rds stop-db-instance --db-instance-identifier mydb`,
        },
        {
          command: 'Start RDS Instance',
          description: 'Start RDS DB instance',
          usage: 'Database lifecycle',
          example: `aws rds start-db-instance --db-instance-identifier mydb`,
        },
        {
          command: 'Reboot RDS Instance',
          description: 'Reboot RDS DB instance',
          usage: 'Database management',
          example: `aws rds reboot-db-instance --db-instance-identifier mydb`,
        },
        {
          command: 'List RDS Snapshots',
          description: 'List all RDS DB snapshots',
          usage: 'Snapshot enumeration',
          example: `aws rds describe-db-snapshots`,
        },
        {
          command: 'Create RDS Snapshot',
          description: 'Create snapshot of RDS DB instance',
          usage: 'Snapshot creation',
          example: `aws rds create-db-snapshot --db-instance-identifier mydb --db-snapshot-identifier my-snapshot`,
        },
        {
          command: 'Delete RDS Snapshot',
          description: 'Delete RDS DB snapshot',
          usage: 'Snapshot management',
          example: `aws rds delete-db-snapshot --db-snapshot-identifier my-snapshot`,
        },
        {
          command: 'Restore from RDS Snapshot',
          description: 'Restore RDB instance from snapshot',
          usage: 'Database restoration',
          example: `aws rds restore-db-instance-from-db-snapshot \\
    --db-instance-identifier newdb \\
    --db-snapshot-identifier my-snapshot`,
        },
        {
          command: 'List RDS Parameter Groups',
          description: 'List all RDS parameter groups',
          usage: 'Parameter group enumeration',
          example: `aws rds describe-db-parameter-groups`,
        },
        {
          command: 'Create RDS Parameter Group',
          description: 'Create new RDS parameter group',
          usage: 'Parameter group creation',
          example: `aws rds create-db-parameter-group --db-parameter-group-name mygroup --db-parameter-group-family mysql8.0 --description "My parameter group"`,
        },
        {
          command: 'Modify RDS Parameter Group',
          description: 'Modify parameters in RDS parameter group',
          usage: 'Parameter modification',
          example: `aws rds modify-db-parameter-group --db-parameter-group-name mygroup --parameters "ParameterName=max_connections,ParameterValue=200,ApplyMethod=immediate"`,
        },
        {
          command: 'List RDS Option Groups',
          description: 'List all RDS option groups',
          usage: 'Option group enumeration',
          example: `aws rds describe-db-option-groups`,
        },
        {
          command: 'Create RDS Option Group',
          description: 'Create new RDS option group',
          usage: 'Option group creation',
          example: `aws rds create-db-option-group --option-group-name myoptiongroup --engine-name mysql --major-engine-version 8.0 --description "My option group"`,
        },
        {
          command: 'List RDS Security Groups',
          description: 'List all RDS security groups',
          usage: 'Security group enumeration',
          example: `aws rds describe-db-security-groups`,
        },
        {
          command: 'Create RDS Security Group',
          description: 'Create new RDS security group',
          usage: 'Security group creation',
          example: `aws rds create-db-security-group --db-security-group-name mysg --db-security-group-description "My security group"`,
        },
        {
          command: 'Authorize RDS Security Group',
          description: 'Authorize access to RDS security group',
          usage: 'Security group authorization',
          example: `aws rds authorize-db-security-group-ingress --db-security-group-name mysg --cidrip 203.0.113.5/32`,
        },
        {
          command: 'List RDS Subnet Groups',
          description: 'List all RDS subnet groups',
          usage: 'Subnet group enumeration',
          example: `aws rds describe-db-subnet-groups`,
        },
        {
          command: 'Create RDS Subnet Group',
          description: 'Create new RDS subnet group',
          usage: 'Subnet group creation',
          example: `aws rds create-db-subnet-group --db-subnet-group-name mysubnetgroup --subnet-ids subnet-12345678 subnet-87654321 --db-subnet-group-description "My subnet group"`,
        },
      ],
    },
    {
      title: 'Intermediate Services - CloudFormation',
      commands: [
        {
          command: 'List CloudFormation Stacks',
          description: 'List all CloudFormation stacks',
          usage: 'Stack enumeration',
          example: `aws cloudformation list-stacks`,
        },
        {
          command: 'Describe CloudFormation Stack',
          description: 'Get details for specific CloudFormation stack',
          usage: 'Stack details',
          example: `aws cloudformation describe-stacks --stack-name my-stack`,
        },
        {
          command: 'Create CloudFormation Stack',
          description: 'Create new CloudFormation stack',
          usage: 'Stack creation',
          example: `aws cloudformation create-stack \\
    --stack-name my-stack \\
    --template-body file://template.yaml \\
    --parameters ParameterKey=KeyPairName,ParameterValue=mykeypair \\
    --capabilities CAPABILITY_IAM`,
        },
        {
          command: 'Delete CloudFormation Stack',
          description: 'Delete CloudFormation stack',
          usage: 'Stack deletion',
          example: `aws cloudformation delete-stack --stack-name my-stack`,
        },
        {
          command: 'Update CloudFormation Stack',
          description: 'Update existing CloudFormation stack',
          usage: 'Stack update',
          example: `aws cloudformation update-stack \\
    --stack-name my-stack \\
    --template-body file://updated-template.yaml \\
    --parameters ParameterKey=KeyPairName,ParameterValue=mykeypair`,
        },
        {
          command: 'Describe Stack Resources',
          description: 'Get resources in CloudFormation stack',
          usage: 'Resource enumeration',
          example: `aws cloudformation describe-stack-resources --stack-name my-stack`,
        },
        {
          command: 'List Stack Resources',
          description: 'List resources in CloudFormation stack',
          usage: 'Resource listing',
          example: `aws cloudformation list-stack-resources --stack-name my-stack`,
        },
        {
          command: 'Describe Stack Events',
          description: 'Get events for CloudFormation stack',
          usage: 'Event monitoring',
          example: `aws cloudformation describe-stack-events --stack-name my-stack`,
        },
        {
          command: 'Set Stack Policy',
          description: 'Set policy for CloudFormation stack',
          usage: 'Stack policy management',
          example: `aws cloudformation set-stack-policy --stack-name my-stack --stack-policy-body file://stack-policy.json`,
        },
        {
          command: 'Get Stack Policy',
          description: 'Get policy for CloudFormation stack',
          usage: 'Stack policy retrieval',
          example: `aws cloudformation get-stack-policy --stack-name my-stack`,
        },
        {
          command: 'Create Change Set',
          description: 'Create change set for CloudFormation stack',
          usage: 'Change management',
          example: `aws cloudformation create-change-set \\
    --stack-name my-stack \\
    --change-set-name my-changeset \\
    --template-body file://template.yaml`,
        },
        {
          command: 'Describe Change Set',
          description: 'Get details for change set',
          usage: 'Change set details',
          example: `aws cloudformation describe-change-set --change-set-name my-changeset --stack-name my-stack`,
        },
        {
          command: 'Execute Change Set',
          description: 'Execute change set for CloudFormation stack',
          usage: 'Change execution',
          example: `aws cloudformation execute-change-set --change-set-name my-changeset --stack-name my-stack`,
        },
        {
          command: 'Delete Change Set',
          description: 'Delete change set',
          usage: 'Change set management',
          example: `aws cloudformation delete-change-set --change-set-name my-changeset --stack-name my-stack`,
        },
        {
          command: 'Detect Stack Drift',
          description: 'Detect drift in CloudFormation stack',
          usage: 'Drift detection',
          example: `aws cloudformation detect-stack-drift --stack-name my-stack`,
        },
        {
          command: 'Describe Stack Drift Detection',
          description: 'Get drift detection status',
          usage: 'Drift monitoring',
          example: `aws cloudformation describe-stack-drift-detection-status --stack-drift-detection-id detection-id`,
        },
        {
          command: 'Describe Stack Resource Drifts',
          description: 'Get resource drifts in stack',
          usage: 'Drift analysis',
          example: `aws cloudformation describe-stack-resource-drifts --stack-name my-stack`,
        },
        {
          command: 'Create CloudFormation Stack Set',
          description: 'Create CloudFormation stack set',
          usage: 'Stack set creation',
          example: `aws cloudformation create-stack-set \\
    --stack-set-name my-stackset \\
    --template-body file://template.yaml \\
    --permission-model SELF_MANAGED`,
        },
        {
          command: 'Create Stack Set Instances',
          description: 'Create instances for stack set',
          usage: 'Stack set deployment',
          example: `aws cloudformation create-stack-instances \\
    --stack-set-name my-stackset \\
    --accounts 123456789012 \\
    --regions us-east-1 us-west-2`,
        },
      ],
    },
    {
      title: 'Intermediate Services - CloudWatch',
      commands: [
        {
          command: 'List CloudWatch Metrics',
          description: 'List all CloudWatch metrics',
          usage: 'Metric enumeration',
          example: `aws cloudwatch list-metrics`,
        },
        {
          command: 'List Specific Metrics',
          description: 'List metrics for specific namespace and metric name',
          usage: 'Filtered metrics',
          example: `aws cloudwatch list-metrics --namespace AWS/EC2 --metric-name CPUUtilization`,
        },
        {
          command: 'Get Metric Statistics',
          description: 'Get statistics for CloudWatch metric',
          usage: 'Metric data retrieval',
          example: `aws cloudwatch get-metric-statistics \\
    --namespace AWS/EC2 \\
    --metric-name CPUUtilization \\
    --dimensions Name=InstanceId,Value=i-1234567890abcdef0 \\
    --start-time 2023-01-01T00:00:00Z \\
    --end-time 2023-01-01T23:59:59Z \\
    --period 3600 \\
    --statistics Average`,
        },
        {
          command: 'List CloudWatch Alarms',
          description: 'List all CloudWatch alarms',
          usage: 'Alarm enumeration',
          example: `aws cloudwatch describe-alarms`,
        },
        {
          command: 'Describe Specific Alarm',
          description: 'Get details for specific CloudWatch alarm',
          usage: 'Alarm details',
          example: `aws cloudwatch describe-alarms --alarm-names my-alarm`,
        },
        {
          command: 'Create CloudWatch Alarm',
          description: 'Create new CloudWatch alarm',
          usage: 'Alarm creation',
          example: `aws cloudwatch put-metric-alarm \\
    --alarm-name my-alarm \\
    --alarm-description "My alarm" \\
    --metric-name CPUUtilization \\
    --namespace AWS/EC2 \\
    --statistic Average \\
    --period 300 \\
    --threshold 70 \\
    --comparison-operator GreaterThanThreshold \\
    --evaluation-periods 2`,
        },
        {
          command: 'Delete CloudWatch Alarm',
          description: 'Delete CloudWatch alarm',
          usage: 'Alarm deletion',
          example: `aws cloudwatch delete-alarms --alarm-names my-alarm`,
        },
        {
          command: 'List Log Groups',
          description: 'List all CloudWatch log groups',
          usage: 'Log group enumeration',
          example: `aws logs describe-log-groups`,
        },
        {
          command: 'List Log Streams',
          description: 'List log streams for specific log group',
          usage: 'Log stream enumeration',
          example: `aws logs describe-log-streams --log-group-name /aws/ec2/my-instance`,
        },
        {
          command: 'Create Log Group',
          description: 'Create new CloudWatch log group',
          usage: 'Log group creation',
          example: `aws logs create-log-group --log-group-name my-log-group`,
        },
        {
          command: 'Delete Log Group',
          description: 'Delete CloudWatch log group',
          usage: 'Log group deletion',
          example: `aws logs delete-log-group --log-group-name my-log-group`,
        },
        {
          command: 'Get Log Events',
          description: 'Get log events from specific log stream',
          usage: 'Log event retrieval',
          example: `aws logs get-log-events \\
    --log-group-name /aws/ec2/my-instance \\
    --log-stream-name i-1234567890abcdef0`,
        },
        {
          command: 'Filter Log Events',
          description: 'Filter log events with pattern',
          usage: 'Log event filtering',
          example: `aws logs filter-log-events \\
    --log-group-name /aws/lambda/my-function \\
    --filter-pattern "ERROR"`,
        },
        {
          command: 'Create Metric Filter',
          description: 'Create metric filter for log group',
          usage: 'Metric filter creation',
          example: `aws logs put-metric-filter \\
    --log-group-name my-log-group \\
    --filter-name my-filter \\
    --filter-pattern "ERROR" \\
    --metric-transformations metricName=ErrorCount,metricNamespace=MyApp,metricValue=1`,
        },
        {
          command: 'List CloudWatch Dashboards',
          description: 'List all CloudWatch dashboards',
          usage: 'Dashboard enumeration',
          example: `aws cloudwatch list-dashboards`,
        },
        {
          command: 'Get CloudWatch Dashboard',
          description: 'Get details for specific CloudWatch dashboard',
          usage: 'Dashboard details',
          example: `aws cloudwatch get-dashboard --dashboard-name my-dashboard`,
        },
        {
          command: 'Create CloudWatch Dashboard',
          description: 'Create new CloudWatch dashboard',
          usage: 'Dashboard creation',
          example: `aws cloudwatch put-dashboard \\
    --dashboard-name my-dashboard \\
    --dashboard-body file://dashboard.json`,
        },
        {
          command: 'Delete CloudWatch Dashboard',
          description: 'Delete CloudWatch dashboard',
          usage: 'Dashboard deletion',
          example: `aws cloudwatch delete-dashboards --dashboard-names my-dashboard`,
        },
      ],
    },
    {
      title: 'Intermediate Services - VPC',
      commands: [
        {
          command: 'List VPCs',
          description: 'List all VPCs',
          usage: 'VPC enumeration',
          example: `aws ec2 describe-vpcs`,
        },
        {
          command: 'Create VPC',
          description: 'Create new VPC',
          usage: 'VPC creation',
          example: `aws ec2 create-vpc --cidr-block 10.0.0.0/16`,
        },
        {
          command: 'Delete VPC',
          description: 'Delete VPC',
          usage: 'VPC deletion',
          example: `aws ec2 delete-vpc --vpc-id vpc-12345678`,
        },
        {
          command: 'List Subnets',
          description: 'List all subnets',
          usage: 'Subnet enumeration',
          example: `aws ec2 describe-subnets`,
        },
        {
          command: 'Create Subnet',
          description: 'Create new subnet in VPC',
          usage: 'Subnet creation',
          example: `aws ec2 create-subnet \\
    --vpc-id vpc-12345678 \\
    --cidr-block 10.0.1.0/24 \\
    --availability-zone us-east-1a`,
        },
        {
          command: 'Delete Subnet',
          description: 'Delete subnet',
          usage: 'Subnet deletion',
          example: `aws ec2 delete-subnet --subnet-id subnet-12345678`,
        },
        {
          command: 'List Internet Gateways',
          description: 'List all internet gateways',
          usage: 'IGW enumeration',
          example: `aws ec2 describe-internet-gateways`,
        },
        {
          command: 'Create Internet Gateway',
          description: 'Create new internet gateway',
          usage: 'IGW creation',
          example: `aws ec2 create-internet-gateway`,
        },
        {
          command: 'Attach Internet Gateway',
          description: 'Attach internet gateway to VPC',
          usage: 'IGW attachment',
          example: `aws ec2 attach-internet-gateway --internet-gateway-id igw-12345678 --vpc-id vpc-12345678`,
        },
        {
          command: 'Detach Internet Gateway',
          description: 'Detach internet gateway from VPC',
          usage: 'IGW detachment',
          example: `aws ec2 detach-internet-gateway --internet-gateway-id igw-12345678 --vpc-id vpc-12345678`,
        },
        {
          command: 'Delete Internet Gateway',
          description: 'Delete internet gateway',
          usage: 'IGW deletion',
          example: `aws ec2 delete-internet-gateway --internet-gateway-id igw-12345678`,
        },
        {
          command: 'List Route Tables',
          description: 'List all route tables',
          usage: 'Route table enumeration',
          example: `aws ec2 describe-route-tables`,
        },
        {
          command: 'Create Route Table',
          description: 'Create new route table in VPC',
          usage: 'Route table creation',
          example: `aws ec2 create-route-table --vpc-id vpc-12345678`,
        },
        {
          command: 'Create Route',
          description: 'Create route in route table',
          usage: 'Route creation',
          example: `aws ec2 create-route \\
    --route-table-id rtb-12345678 \\
    --destination-cidr-block 0.0.0.0/0 \\
    --gateway-id igw-12345678`,
        },
        {
          command: 'Associate Route Table',
          description: 'Associate route table with subnet',
          usage: 'Route table association',
          example: `aws ec2 associate-route-table --route-table-id rtb-12345678 --subnet-id subnet-12345678`,
        },
        {
          command: 'Delete Route Table',
          description: 'Delete route table',
          usage: 'Route table deletion',
          example: `aws ec2 delete-route-table --route-table-id rtb-12345678`,
        },
        {
          command: 'Create VPC Security Group',
          description: 'Create security group in VPC',
          usage: 'VPC security group creation',
          example: `aws ec2 create-security-group \\
    --group-name my-sg \\
    --description "My security group" \\
    --vpc-id vpc-12345678`,
        },
        {
          command: 'Authorize VPC Security Group',
          description: 'Add rule to VPC security group',
          usage: 'VPC security group rules',
          example: `aws ec2 authorize-security-group-ingress \\
    --group-id sg-12345678 \\
    --protocol tcp \\
    --port 22 \\
    --cidr 0.0.0.0/0`,
        },
        {
          command: 'List Network ACLs',
          description: 'List all network ACLs',
          usage: 'NACL enumeration',
          example: `aws ec2 describe-network-acls`,
        },
        {
          command: 'Create Network ACL',
          description: 'Create new network ACL in VPC',
          usage: 'NACL creation',
          example: `aws ec2 create-network-acl --vpc-id vpc-12345678`,
        },
        {
          command: 'Create Network ACL Entry',
          description: 'Create entry in network ACL',
          usage: 'NACL rule creation',
          example: `aws ec2 create-network-acl-entry \\
    --network-acl-id acl-12345678 \\
    --rule-number 100 \\
    --protocol -1 \\
    --rule-action allow \\
    --egress \\
    --cidr-block 0.0.0.0/0`,
        },
        {
          command: 'List NAT Gateways',
          description: 'List all NAT gateways',
          usage: 'NAT gateway enumeration',
          example: `aws ec2 describe-nat-gateways`,
        },
        {
          command: 'Create NAT Gateway',
          description: 'Create new NAT gateway',
          usage: 'NAT gateway creation',
          example: `aws ec2 create-nat-gateway \\
    --subnet-id subnet-12345678 \\
    --allocation-id eipalloc-12345678`,
        },
        {
          command: 'Delete NAT Gateway',
          description: 'Delete NAT gateway',
          usage: 'NAT gateway deletion',
          example: `aws ec2 delete-nat-gateway --nat-gateway-id nat-12345678`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Advanced Services - ECS',
      commands: [
        {
          command: 'List ECS Clusters',
          description: 'List all ECS clusters',
          usage: 'Cluster enumeration',
          example: `aws ecs list-clusters`,
        },
        {
          command: 'Describe ECS Cluster',
          description: 'Get details for specific ECS cluster',
          usage: 'Cluster details',
          example: `aws ecs describe-clusters --clusters my-cluster`,
        },
        {
          command: 'Create ECS Cluster',
          description: 'Create new ECS cluster',
          usage: 'Cluster creation',
          example: `aws ecs create-cluster --cluster-name my-cluster`,
        },
        {
          command: 'Delete ECS Cluster',
          description: 'Delete ECS cluster',
          usage: 'Cluster deletion',
          example: `aws ecs delete-cluster --cluster my-cluster`,
        },
        {
          command: 'List ECS Task Definitions',
          description: 'List all ECS task definitions',
          usage: 'Task definition enumeration',
          example: `aws ecs list-task-definitions`,
        },
        {
          command: 'Describe ECS Task Definition',
          description: 'Get details for specific task definition',
          usage: 'Task definition details',
          example: `aws ecs describe-task-definition --task-definition my-task:1`,
        },
        {
          command: 'Register ECS Task Definition',
          description: 'Register new ECS task definition',
          usage: 'Task definition registration',
          example: `aws ecs register-task-definition --cli-input-json file://task-definition.json`,
        },
        {
          command: 'Deregister ECS Task Definition',
          description: 'Deregister ECS task definition',
          usage: 'Task definition management',
          example: `aws ecs deregister-task-definition --task-definition my-task:1`,
        },
        {
          command: 'List ECS Services',
          description: 'List all ECS services in cluster',
          usage: 'Service enumeration',
          example: `aws ecs list-services --cluster my-cluster`,
        },
        {
          command: 'Describe ECS Service',
          description: 'Get details for specific ECS service',
          usage: 'Service details',
          example: `aws ecs describe-services --cluster my-cluster --services my-service`,
        },
        {
          command: 'Create ECS Service',
          description: 'Create new ECS service',
          usage: 'Service creation',
          example: `aws ecs create-service \\
    --cluster my-cluster \\
    --service-name my-service \\
    --task-definition my-task:1 \\
    --desired-count 2`,
        },
        {
          command: 'Update ECS Service',
          description: 'Update existing ECS service',
          usage: 'Service update',
          example: `aws ecs update-service \\
    --cluster my-cluster \\
    --service my-service \\
    --task-definition my-task:2 \\
    --desired-count 3`,
        },
        {
          command: 'Delete ECS Service',
          description: 'Delete ECS service',
          usage: 'Service deletion',
          example: `aws ecs delete-service --cluster my-cluster --service my-service --force`,
        },
        {
          command: 'List ECS Tasks',
          description: 'List all tasks in cluster',
          usage: 'Task enumeration',
          example: `aws ecs list-tasks --cluster my-cluster`,
        },
        {
          command: 'Describe ECS Tasks',
          description: 'Get details for specific tasks',
          usage: 'Task details',
          example: `aws ecs describe-tasks --cluster my-cluster --tasks task-id`,
        },
        {
          command: 'Run ECS Task',
          description: 'Run new ECS task',
          usage: 'Task execution',
          example: `aws ecs run-task \\
    --cluster my-cluster \\
    --task-definition my-task:1 \\
    --count 1`,
        },
        {
          command: 'Stop ECS Task',
          description: 'Stop running ECS task',
          usage: 'Task management',
          example: `aws ecs stop-task --cluster my-cluster --task task-id`,
        },
        {
          command: 'List ECS Container Instances',
          description: 'List container instances in cluster',
          usage: 'Container instance enumeration',
          example: `aws ecs list-container-instances --cluster my-cluster`,
        },
        {
          command: 'Describe ECS Container Instances',
          description: 'Get details for container instances',
          usage: 'Container instance details',
          example: `aws ecs describe-container-instances --cluster my-cluster --container-instances instance-id`,
        },
        {
          command: 'Register ECS Container Instance',
          description: 'Register container instance with cluster',
          usage: 'Container instance registration',
          example: `aws ecs register-container-instance --cluster my-cluster --instance-info file://instance-info.json`,
        },
        {
          command: 'Deregister ECS Container Instance',
          description: 'Deregister container instance from cluster',
          usage: 'Container instance management',
          example: `aws ecs deregister-container-instance --cluster my-cluster --container-instance instance-id --force`,
        },
        {
          command: 'Describe ECS Capacity Providers',
          description: 'List all ECS capacity providers',
          usage: 'Capacity provider enumeration',
          example: `aws ecs describe-capacity-providers`,
        },
        {
          command: 'Create ECS Capacity Provider',
          description: 'Create new ECS capacity provider',
          usage: 'Capacity provider creation',
          example: `aws ecs create-capacity-provider --name my-provider --auto-scaling-group-provider file://asg-provider.json`,
        },
        {
          command: 'Delete ECS Capacity Provider',
          description: 'Delete ECS capacity provider',
          usage: 'Capacity provider management',
          example: `aws ecs delete-capacity-provider --capacity-provider my-provider`,
        },
        {
          command: 'Describe ECS Task Sets',
          description: 'Get task sets for service',
          usage: 'Task set enumeration',
          example: `aws ecs describe-task-sets --cluster my-cluster --service my-service`,
        },
        {
          command: 'Create ECS Task Set',
          description: 'Create new task set for service',
          usage: 'Task set creation',
          example: `aws ecs create-task-set \\
    --cluster my-cluster \\
    --service my-service \\
    --task-definition my-task:1 \\
    --scale unit=PERCENT,value=100`,
        },
      ],
    },
    {
      title: 'Advanced Services - EKS',
      commands: [
        {
          command: 'List EKS Clusters',
          description: 'List all EKS clusters',
          usage: 'Cluster enumeration',
          example: `aws eks list-clusters`,
        },
        {
          command: 'Describe EKS Cluster',
          description: 'Get details for specific EKS cluster',
          usage: 'Cluster details',
          example: `aws eks describe-cluster --name my-cluster`,
        },
        {
          command: 'Create EKS Cluster',
          description: 'Create new EKS cluster',
          usage: 'Cluster creation',
          example: `aws eks create-cluster \\
    --name my-cluster \\
    --version 1.28 \\
    --role-arn arn:aws:iam::123456789012:role/eks-service-role \\
    --resources-vpc-config subnetIds=subnet-12345,subnet-67890,securityGroupIds=sg-12345`,
        },
        {
          command: 'Delete EKS Cluster',
          description: 'Delete EKS cluster',
          usage: 'Cluster deletion',
          example: `aws eks delete-cluster --name my-cluster`,
        },
        {
          command: 'List EKS Node Groups',
          description: 'List node groups in EKS cluster',
          usage: 'Node group enumeration',
          example: `aws eks list-nodegroups --cluster-name my-cluster`,
        },
        {
          command: 'Describe EKS Node Group',
          description: 'Get details for specific node group',
          usage: 'Node group details',
          example: `aws eks describe-nodegroup --cluster-name my-cluster --nodegroup-name my-nodegroup`,
        },
        {
          command: 'Create EKS Node Group',
          description: 'Create new node group in EKS cluster',
          usage: 'Node group creation',
          example: `aws eks create-nodegroup \\
    --cluster-name my-cluster \\
    --nodegroup-name my-nodegroup \\
    --scaling-config minSize=1,maxSize=3,desiredSize=2 \\
    --subnets subnet-12345,subnet-67890 \\
    --instance-types t3.medium`,
        },
        {
          command: 'Delete EKS Node Group',
          description: 'Delete node group from EKS cluster',
          usage: 'Node group deletion',
          example: `aws eks delete-nodegroup --cluster-name my-cluster --nodegroup-name my-nodegroup`,
        },
        {
          command: 'Update EKS Cluster Version',
          description: 'Update EKS cluster to new version',
          usage: 'Cluster upgrade',
          example: `aws eks update-cluster-version \\
    --name my-cluster \\
    --version 1.29 \\
    --config-add file://addon-config.json`,
        },
        {
          command: 'Update EKS Cluster Config',
          description: 'Update EKS cluster configuration',
          usage: 'Cluster configuration',
          example: `aws eks update-cluster-config \\
    --name my-cluster \\
    --resources-vpc-config subnetIds=subnet-12345,subnet-67890`,
        },
        {
          command: 'List EKS Addons',
          description: 'List addons in EKS cluster',
          usage: 'Addon enumeration',
          example: `aws eks list-addons --cluster-name my-cluster`,
        },
        {
          command: 'Describe EKS Addon',
          description: 'Get details for specific addon',
          usage: 'Addon details',
          example: `aws eks describe-addon --cluster-name my-cluster --addon-name vpc-cni`,
        },
        {
          command: 'Create EKS Addon',
          description: 'Create new addon in EKS cluster',
          usage: 'Addon creation',
          example: `aws eks create-addon \\
    --cluster-name my-cluster \\
    --addon-name vpc-cni \\
    --addon-version latest \\
    --resolve-conflicts OVERWRITE`,
        },
        {
          command: 'Update EKS Addon',
          description: 'Update existing addon in EKS cluster',
          usage: 'Addon update',
          example: `aws eks update-addon \\
    --cluster-name my-cluster \\
    --addon-name vpc-cni \\
    --addon-version latest`,
        },
        {
          command: 'Delete EKS Addon',
          description: 'Delete addon from EKS cluster',
          usage: 'Addon deletion',
          example: `aws eks delete-addon --cluster-name my-cluster --addon-name vpc-cni`,
        },
        {
          command: 'List EKS Fargate Profiles',
          description: 'List Fargate profiles in EKS cluster',
          usage: 'Fargate profile enumeration',
          example: `aws eks list-fargate-profiles --cluster-name my-cluster`,
        },
        {
          command: 'Describe EKS Fargate Profile',
          description: 'Get details for specific Fargate profile',
          usage: 'Fargate profile details',
          example: `aws eks describe-fargate-profile --cluster-name my-cluster --fargate-profile-name my-profile`,
        },
        {
          command: 'Create EKS Fargate Profile',
          description: 'Create new Fargate profile in EKS cluster',
          usage: 'Fargate profile creation',
          example: `aws eks create-fargate-profile \\
    --cluster-name my-cluster \\
    --fargate-profile-name my-profile \\
    --pod-execution-role-arn arn:aws:iam::123456789012:role/eks-fargate-pod-execution-role \\
    --subnets subnet-12345,subnet-67890 \\
    --selectors file://selectors.json`,
        },
        {
          command: 'Delete EKS Fargate Profile',
          description: 'Delete Fargate profile from EKS cluster',
          usage: 'Fargate profile deletion',
          example: `aws eks delete-fargate-profile --cluster-name my-cluster --fargate-profile-name my-profile`,
        },
        {
          command: 'Associate EKS Identity Provider Config',
          description: 'Associate identity provider config with EKS cluster',
          usage: 'Identity provider configuration',
          example: `aws eks associate-identity-provider-config \\
    --cluster-name my-cluster \\
    --oidc file://oidc-config.json`,
        },
        {
          command: 'Disassociate EKS Identity Provider Config',
          description: 'Disassociate identity provider config from EKS cluster',
          usage: 'Identity provider management',
          example: `aws eks disassociate-identity-provider-config \\
    --cluster-name my-cluster \\
    --identity-provider-config arn:aws:eks:us-east-1:123456789012:identityproviderconfig/my-cluster/oidc/my-config`,
        },
      ],
    },
    {
      title: 'Advanced Services - DynamoDB',
      commands: [
        {
          command: 'List DynamoDB Tables',
          description: 'List all DynamoDB tables',
          usage: 'Table enumeration',
          example: `aws dynamodb list-tables`,
        },
        {
          command: 'Describe DynamoDB Table',
          description: 'Get details for specific DynamoDB table',
          usage: 'Table details',
          example: `aws dynamodb describe-table --table-name my-table`,
        },
        {
          command: 'Create DynamoDB Table',
          description: 'Create new DynamoDB table',
          usage: 'Table creation',
          example: `aws dynamodb create-table \\
    --table-name my-table \\
    --attribute-definitions AttributeName=id,AttributeType=S \\
    --key-schema AttributeName=id,KeyType=HASH \\
    --billing-mode PAY_PER_REQUEST`,
        },
        {
          command: 'Delete DynamoDB Table',
          description: 'Delete DynamoDB table',
          usage: 'Table deletion',
          example: `aws dynamodb delete-table --table-name my-table`,
        },
        {
          command: 'Put DynamoDB Item',
          description: 'Put item into DynamoDB table',
          usage: 'Item insertion',
          example: `aws dynamodb put-item \\
    --table-name my-table \\
    --item file://item.json`,
        },
        {
          command: 'Get DynamoDB Item',
          description: 'Get item from DynamoDB table',
          usage: 'Item retrieval',
          example: `aws dynamodb get-item \\
    --table-name my-table \\
    --key file://key.json`,
        },
        {
          command: 'Update DynamoDB Item',
          description: 'Update item in DynamoDB table',
          usage: 'Item modification',
          example: `aws dynamodb update-item \\
    --table-name my-table \\
    --key file://key.json \\
    --update-expression "SET #n = :val" \\
    --expression-attribute-names file://names.json \\
    --expression-attribute-values file://values.json`,
        },
        {
          command: 'Delete DynamoDB Item',
          description: 'Delete item from DynamoDB table',
          usage: 'Item deletion',
          example: `aws dynamodb delete-item \\
    --table-name my-table \\
    --key file://key.json`,
        },
        {
          command: 'Query DynamoDB Table',
          description: 'Query items from DynamoDB table',
          usage: 'Item querying',
          example: `aws dynamodb query \\
    --table-name my-table \\
    --key-condition-expression "id = :id" \\
    --expression-attribute-values file://values.json`,
        },
        {
          command: 'Scan DynamoDB Table',
          description: 'Scan items from DynamoDB table',
          usage: 'Table scanning',
          example: `aws dynamodb scan \\
    --table-name my-table \\
    --filter-expression "attribute_exists(name)"`,
        },
        {
          command: 'Batch Write DynamoDB Items',
          description: 'Batch write items to DynamoDB table',
          usage: 'Batch operations',
          example: `aws dynamodb batch-write-item \\
    --request-items file://batch-write.json`,
        },
        {
          command: 'Batch Get DynamoDB Items',
          description: 'Batch get items from DynamoDB table',
          usage: 'Batch operations',
          example: `aws dynamodb batch-get-item \\
    --request-items file://batch-get.json`,
        },
        {
          command: 'Describe DynamoDB Global Table',
          description: 'Get details for global table',
          usage: 'Global table details',
          example: `aws dynamodb describe-global-table --global-table-name my-global-table`,
        },
        {
          command: 'Create DynamoDB Global Table',
          description: 'Create global table with replicas',
          usage: 'Global table creation',
          example: `aws dynamodb create-global-table \\
    --global-table-name my-global-table \\
    --replication-group RegionName=us-east-1,RegionName=us-west-2`,
        },
        {
          command: 'Update DynamoDB Global Table',
          description: 'Update global table replicas',
          usage: 'Global table management',
          example: `aws dynamodb update-global-table \\
    --global-table-name my-global-table \\
    --replica-updates file://replica-updates.json`,
        },
        {
          command: 'List DynamoDB Streams',
          description: 'List streams for DynamoDB table',
          usage: 'Stream enumeration',
          example: `aws dynamodb list-streams --table-name my-table`,
        },
        {
          command: 'Describe DynamoDB Stream',
          description: 'Get details for specific stream',
          usage: 'Stream details',
          example: `aws dynamodb describe-stream --stream-arn arn:aws:dynamodb:us-east-1:123456789012:table/my-table/stream/2023-01-01T00:00:00.000`,
        },
        {
          command: 'Enable DynamoDB TTL',
          description: 'Enable Time To Live on DynamoDB table',
          usage: 'TTL management',
          example: `aws dynamodb update-time-to-live \\
    --table-name my-table \\
    --time-to-live-specification Enabled=true,AttributeName=ttl`,
        },
        {
          command: 'Describe DynamoDB TTL',
          description: 'Get TTL configuration for table',
          usage: 'TTL details',
          example: `aws dynamodb describe-time-to-live --table-name my-table`,
        },
        {
          command: 'Create DynamoDB Backup',
          description: 'Create backup of DynamoDB table',
          usage: 'Backup creation',
          example: `aws dynamodb create-backup \\
    --table-name my-table \\
    --backup-name my-backup`,
        },
        {
          command: 'List DynamoDB Backups',
          description: 'List backups for DynamoDB table',
          usage: 'Backup enumeration',
          example: `aws dynamodb list-backups --table-name my-table`,
        },
        {
          command: 'Describe DynamoDB Backup',
          description: 'Get details for specific backup',
          usage: 'Backup details',
          example: `aws dynamodb describe-backup --backup-arn arn:aws:dynamodb:us-east-1:123456789012:table/my-table/backup/0123456789-01234567`,
        },
        {
          command: 'Delete DynamoDB Backup',
          description: 'Delete DynamoDB backup',
          usage: 'Backup management',
          example: `aws dynamodb delete-backup --backup-arn arn:aws:dynamodb:us-east-1:123456789012:table/my-table/backup/0123456789-01234567`,
        },
        {
          command: 'Restore DynamoDB from Backup',
          description: 'Restore table from backup',
          usage: 'Table restoration',
          example: `aws dynamodb restore-table-from-backup \\
    --target-table-name new-table \\
    --backup-arn arn:aws:dynamodb:us-east-1:123456789012:table/my-table/backup/0123456789-01234567`,
        },
      ],
    },
    {
      title: 'Advanced Services - SQS and SNS',
      commands: [
        {
          command: 'List SQS Queues',
          description: 'List all SQS queues',
          usage: 'Queue enumeration',
          example: `aws sqs list-queues`,
        },
        {
          command: 'Get SQS Queue Attributes',
          description: 'Get attributes for SQS queue',
          usage: 'Queue details',
          example: `aws sqs get-queue-attributes --queue-url https://sqs.us-east-1.amazonaws.com/123456789012/my-queue --attribute-names All`,
        },
        {
          command: 'Create SQS Queue',
          description: 'Create new SQS queue',
          usage: 'Queue creation',
          example: `aws sqs create-queue --queue-name my-queue`,
        },
        {
          command: 'Delete SQS Queue',
          description: 'Delete SQS queue',
          usage: 'Queue deletion',
          example: `aws sqs delete-queue --queue-url https://sqs.us-east-1.amazonaws.com/123456789012/my-queue`,
        },
        {
          command: 'Send SQS Message',
          description: 'Send message to SQS queue',
          usage: 'Message sending',
          example: `aws sqs send-message \\
    --queue-url https://sqs.us-east-1.amazonaws.com/123456789012/my-queue \\
    --message-body "Hello World"`,
        },
        {
          command: 'Receive SQS Messages',
          description: 'Receive messages from SQS queue',
          usage: 'Message receiving',
          example: `aws sqs receive-message \\
    --queue-url https://sqs.us-east-1.amazonaws.com/123456789012/my-queue \\
    --max-number-of-messages 10 \\
    --wait-time-seconds 20`,
        },
        {
          command: 'Delete SQS Message',
          description: 'Delete message from SQS queue',
          usage: 'Message deletion',
          example: `aws sqs delete-message \\
    --queue-url https://sqs.us-east-1.amazonaws.com/123456789012/my-queue \\
    --receipt-handle receipt-handle`,
        },
        {
          command: 'Set SQS Queue Attributes',
          description: 'Set attributes for SQS queue',
          usage: 'Queue configuration',
          example: `aws sqs set-queue-attributes \\
    --queue-url https://sqs.us-east-1.amazonaws.com/123456789012/my-queue \\
    --attributes VisibilityTimeout=30,MessageRetentionPeriod=1209600`,
        },
        {
          command: 'Create SQS Dead Letter Queue',
          description: 'Create dead letter queue',
          usage: 'DLQ setup',
          example: `aws sqs create-queue --queue-name my-dead-letter-queue`,
        },
        {
          command: 'Configure SQS Dead Letter Queue',
          description: 'Configure dead letter queue for main queue',
          usage: 'DLQ configuration',
          example: `aws sqs set-queue-attributes \\
    --queue-url https://sqs.us-east-1.amazonaws.com/123456789012/my-queue \\
    --attributes file://dlq-attributes.json`,
        },
        {
          command: 'List SNS Topics',
          description: 'List all SNS topics',
          usage: 'Topic enumeration',
          example: `aws sns list-topics`,
        },
        {
          command: 'Create SNS Topic',
          description: 'Create new SNS topic',
          usage: 'Topic creation',
          example: `aws sns create-topic --name my-topic`,
        },
        {
          command: 'Delete SNS Topic',
          description: 'Delete SNS topic',
          usage: 'Topic deletion',
          example: `aws sns delete-topic --topic-arn arn:aws:sns:us-east-1:123456789012:my-topic`,
        },
        {
          command: 'List SNS Subscriptions',
          description: 'List all SNS subscriptions',
          usage: 'Subscription enumeration',
          example: `aws sns list-subscriptions`,
        },
        {
          command: 'Subscribe to SNS Topic',
          description: 'Subscribe to SNS topic',
          usage: 'Subscription creation',
          example: `aws sns subscribe \\
    --topic-arn arn:aws:sns:us-east-1:123456789012:my-topic \\
    --protocol email \\
    --notification-endpoint user@example.com`,
        },
        {
          command: 'Unsubscribe from SNS Topic',
          description: 'Unsubscribe from SNS topic',
          usage: 'Subscription deletion',
          example: `aws sns unsubscribe --subscription-arn arn:aws:sns:us-east-1:123456789012:my-topic:subscription-id`,
        },
        {
          command: 'Publish to SNS Topic',
          description: 'Publish message to SNS topic',
          usage: 'Message publishing',
          example: `aws sns publish \\
    --topic-arn arn:aws:sns:us-east-1:123456789012:my-topic \\
    --message "Hello World" \\
    --subject "My Subject"`,
        },
        {
          command: 'List SNS Platform Applications',
          description: 'List SNS platform applications',
          usage: 'Platform application enumeration',
          example: `aws sns list-platform-applications`,
        },
        {
          command: 'Create SNS Platform Application',
          description: 'Create SNS platform application',
          usage: 'Platform application creation',
          example: `aws sns create-platform-application \\
    --name my-platform-app \\
    --platform GCM \\
    --attributes file://platform-attributes.json`,
        },
        {
          command: 'Create SNS Platform Endpoint',
          description: 'Create endpoint for platform application',
          usage: 'Endpoint creation',
          example: `aws sns create-platform-endpoint \\
    --platform-application-arn arn:aws:sns:us-east-1:123456789012:app/GCM/my-platform-app \\
    --token device-token \\
    --custom-user-data user-data`,
        },
        {
          command: 'Get SNS Endpoint Attributes',
          description: 'Get attributes for SNS endpoint',
          usage: 'Endpoint details',
          example: `aws sns get-endpoint-attributes --endpoint-arn arn:aws:sns:us-east-1:123456789012:endpoint/GCM/my-platform-app/endpoint-id`,
        },
        {
          command: 'Set SNS Endpoint Attributes',
          description: 'Set attributes for SNS endpoint',
          usage: 'Endpoint configuration',
          example: `aws sns set-endpoint-attributes \\
    --endpoint-arn arn:aws:sns:us-east-1:123456789012:endpoint/GCM/my-platform-app/endpoint-id \\
    --attributes Enabled=true`,
        },
        {
          command: 'Delete SNS Endpoint',
          description: 'Delete SNS endpoint',
          usage: 'Endpoint deletion',
          example: `aws sns delete-endpoint --endpoint-arn arn:aws:sns:us-east-1:123456789012:endpoint/GCM/my-platform-app/endpoint-id`,
        },
      ],
    },
    // EXPERT LEVEL
    {
      title: 'Expert Level - Advanced CLI Techniques',
      commands: [
        {
          command: 'JMESPath Query for EC2 Instances',
          description: 'Query EC2 instances with JMESPath',
          usage: 'Advanced querying',
          example: `aws ec2 describe-instances --query "Reservations[].Instances[].[InstanceId,State.Name,Tags[?Key=='Name'].Value[0]]"`,
        },
        {
          command: 'JMESPath Query for S3 Buckets',
          description: 'Query S3 buckets with JMESPath filtering',
          usage: 'Advanced filtering',
          example: `aws s3api list-buckets --query "Buckets[?contains(Name, 'prod')].Name"`,
        },
        {
          command: 'JMESPath Query for DynamoDB',
          description: 'Query DynamoDB items with JMESPath',
          usage: 'Advanced data querying',
          example: `aws dynamodb scan --table-name my-table --query "Items[?AttributeType=='string']"`,
        },
        {
          command: 'Pagination with Max Items',
          description: 'Control pagination with max items',
          usage: 'Result pagination',
          example: `aws ec2 describe-instances --max-items 5 --starting-token token`,
        },
        {
          command: 'Pagination with Max Keys',
          description: 'Control pagination with max keys',
          usage: 'S3 pagination',
          example: `aws s3api list-objects --bucket my-bucket --max-keys 100`,
        },
        {
          command: 'Filter by Instance Type',
          description: 'Filter EC2 instances by type',
          usage: 'Advanced filtering',
          example: `aws ec2 describe-instances --filters Name=instance-type,Values=t2.micro Name=tag:Environment,Values=prod`,
        },
        {
          command: 'Filter by Log Group Prefix',
          description: 'Filter CloudWatch log groups by prefix',
          usage: 'Log filtering',
          example: `aws logs describe-log-groups --log-group-name-prefix /aws/lambda`,
        },
        {
          command: 'Table Output Format',
          description: 'Format output as table',
          usage: 'Output formatting',
          example: `aws ec2 describe-instances --output table --query "Reservations[].Instances[].[InstanceId,InstanceType,State.Name]"`,
        },
        {
          command: 'Human Readable S3 Listing',
          description: 'List S3 objects in human readable format',
          usage: 'Readable output',
          example: `aws s3 ls --human-readable --summarize`,
        },
        {
          command: 'AWS Config File Setup',
          description: 'Configure AWS CLI config file',
          usage: 'Configuration management',
          example: `# ~/.aws/config
[default]
region = us-west-2
output = json
cli_pager =

[profile dev]
region = us-east-1
output = text`,
        },
        {
          command: 'AWS Credentials File Setup',
          description: 'Configure AWS CLI credentials file',
          usage: 'Credentials management',
          example: `# ~/.aws/credentials
[default]
aws_access_key_id = AKIAIOSFODNN7EXAMPLE
aws_secret_access_key = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`,
        },
        {
          command: 'Environment Variables Configuration',
          description: 'Configure AWS CLI with environment variables',
          usage: 'Environment setup',
          example: `export AWS_PROFILE=dev
export AWS_REGION=us-east-1
export AWS_DEFAULT_OUTPUT=json
export AWS_CA_BUNDLE=/path/to/ca-bundle.crt
export AWS_RETRY_MODE=adaptive
export AWS_MAX_ATTEMPTS=10`,
        },
        {
          command: 'Assume Role Script',
          description: 'Script to assume AWS role',
          usage: 'Role assumption',
          example: `#!/bin/bash
ROLE_ARN="arn:aws:iam::123456789012:role/MyRole"
SESSION_NAME="my-session"

CREDS=$(aws sts assume-role --role-arn $ROLE_ARN --role-session-name $SESSION_NAME)

export AWS_ACCESS_KEY_ID=$(echo $CREDS | jq -r .Credentials.AccessKeyId)
export AWS_SECRET_ACCESS_KEY=$(echo $CREDS | jq -r .Credentials.SecretAccessKey)
export AWS_SESSION_TOKEN=$(echo $CREDS | jq -r .Credentials.SessionToken)`,
        },
        {
          command: 'Parallel Execution Across Regions',
          description: 'Execute commands in parallel across regions',
          usage: 'Parallel operations',
          example: `for region in us-east-1 us-west-2 eu-west-1; do
    aws ec2 describe-instances --region $region &
done
wait`,
        },
        {
          command: 'Batch Operations with Query',
          description: 'Perform batch operations with JMESPath',
          usage: 'Batch processing',
          example: `aws s3api list-objects --bucket my-bucket --query "Contents[?Size>\`1024\`].Key" --output text | xargs -I {} aws s3 rm s3://my-bucket/{}`,
        },
        {
          command: 'Custom CLI Output',
          description: 'Create custom CLI output formatting',
          usage: 'Custom formatting',
          example: `aws ec2 describe-instances --query "Reservations[].Instances[?State.Name=='running'].InstanceId" --output text`,
        },
        {
          command: 'CLI Retry Configuration',
          description: 'Configure CLI retry behavior',
          usage: 'Error handling',
          example: `export AWS_RETRY_MODE=standard
export AWS_MAX_ATTEMPTS=5
aws s3 ls --debug`,
        },
        {
          command: 'CLI Timeout Configuration',
          description: 'Configure CLI timeout settings',
          usage: 'Timeout management',
          example: `aws s3 ls --cli-read-timeout 60 --cli-connect-timeout 30`,
        },
        {
          command: 'Generate CLI Skeleton',
          description: 'Generate JSON skeleton for commands',
          usage: 'Command scaffolding',
          example: `aws ec2 run-instances --generate-cli-skeleton`,
        },
        {
          command: 'Use CLI Input JSON',
          description: 'Use JSON file for CLI input',
          usage: 'File-based input',
          example: `aws dynamodb update-table --cli-input-json file://config.json`,
        },
      ],
    },
    {
      title: 'Expert Level - Security and Compliance',
      commands: [
        {
          command: 'List Security Hub Standards',
          description: 'List enabled Security Hub standards',
          usage: 'Security compliance',
          example: `aws securityhub get-enabled-standards`,
        },
        {
          command: 'Enable Security Hub',
          description: 'Enable AWS Security Hub',
          usage: 'Security setup',
          example: `aws securityhub enable-security-hub --enable-default-standards`,
        },
        {
          command: 'Update Security Hub Findings',
          description: 'Update Security Hub findings',
          usage: 'Finding management',
          example: `aws securityhub update-findings --finding-ids file://finding-ids.json`,
        },
        {
          command: 'List GuardDuty Detectors',
          description: 'List GuardDuty detectors',
          usage: 'Threat detection',
          example: `aws guardduty list-detectors`,
        },
        {
          command: 'Create GuardDuty Detector',
          description: 'Create GuardDuty detector',
          usage: 'Threat detection setup',
          example: `aws guardduty create-detector --enable`,
        },
        {
          command: 'List GuardDuty Findings',
          description: 'List GuardDuty findings',
          usage: 'Threat analysis',
          example: `aws guardduty list-findings --detector-id detector-id`,
        },
        {
          command: 'List IAM Access Analyzers',
          description: 'List IAM access analyzers',
          usage: 'Access analysis',
          example: `aws accessanalyzer list-analyzers`,
        },
        {
          command: 'Create IAM Access Analyzer',
          description: 'Create IAM access analyzer',
          usage: 'Access analysis setup',
          example: `aws accessanalyzer create-analyzer --analyzer-name my-analyzer --type ACCOUNT`,
        },
        {
          command: 'List Access Analyzer Findings',
          description: 'List findings from access analyzer',
          usage: 'Access findings',
          example: `aws accessanalyzer list-findings --analyzer-arn arn:aws:access-analyzer:us-east-1:123456789012:analyzer/my-analyzer`,
        },
        {
          command: 'Get Config Service Resources',
          description: 'Get discovered resources from Config',
          usage: 'Configuration tracking',
          example: `aws configservice get-discovered-resources --resource-type AWS::EC2::Instance`,
        },
        {
          command: 'Put Config Recorder',
          description: 'Put configuration recorder',
          usage: 'Config setup',
          example: `aws configservice put-configuration-recorder --configuration-recorder file://recorder.json`,
        },
        {
          command: 'Start Config Recorder',
          description: 'Start configuration recorder',
          usage: 'Config management',
          example: `aws configservice start-configuration-recorder --configuration-recorder-name my-recorder`,
        },
        {
          command: 'Describe CloudTrail Trails',
          description: 'List CloudTrail trails',
          usage: 'Audit trail management',
          example: `aws cloudtrail describe-trails`,
        },
        {
          command: 'Create CloudTrail Trail',
          description: 'Create CloudTrail trail',
          usage: 'Audit setup',
          example: `aws cloudtrail create-trail \\
    --name my-trail \\
    --s3-bucket-name my-cloudtrail-bucket \\
    --include-global-service-events \\
    --is-multi-region-trail`,
        },
        {
          command: 'Get CloudTrail Event Selectors',
          description: 'Get event selectors for trail',
          usage: 'Event configuration',
          example: `aws cloudtrail get-event-selectors --trail-name my-trail`,
        },
        {
          command: 'List Inspector Assessment Templates',
          description: 'List Inspector assessment templates',
          usage: 'Security assessment',
          example: `aws inspector list-assessment-templates`,
        },
        {
          command: 'Create Inspector Assessment Template',
          description: 'Create Inspector assessment template',
          usage: 'Assessment setup',
          example: `aws inspector create-assessment-template \\
    --assessment-target-arn arn:aws:inspector:us-east-1:123456789012:target/0-nvgVhaxX \\
    --name my-template \\
    --duration-in-seconds 3600 \\
    --rules-package-arns file://rules.json`,
        },
        {
          command: 'List Macie Members',
          description: 'List Macie members',
          usage: 'Data protection',
          example: `aws macie2 list-members`,
        },
        {
          command: 'Create Macie Member',
          description: 'Create Macie member',
          usage: 'Data protection setup',
          example: `aws macie2 create-member --account-id 123456789012 --email member@example.com`,
        },
        {
          command: 'List Macie Findings',
          description: 'List Macie findings',
          usage: 'Data security findings',
          example: `aws macie2 list-findings`,
        },
        {
          command: 'List ACM Certificates',
          description: 'List ACM certificates',
          usage: 'Certificate management',
          example: `aws acm list-certificates`,
        },
        {
          command: 'Request ACM Certificate',
          description: 'Request new ACM certificate',
          usage: 'Certificate creation',
          example: `aws acm request-certificate \\
    --domain-name example.com \\
    --subject-alternative-names www.example.com \\
    --validation-method DNS`,
        },
        {
          command: 'List KMS Keys',
          description: 'List KMS keys',
          usage: 'Key management',
          example: `aws kms list-keys`,
        },
        {
          command: 'Create KMS Key',
          description: 'Create new KMS key',
          usage: 'Key creation',
          example: `aws kms create-key --description "My encryption key"`,
        },
        {
          command: 'Create KMS Alias',
          description: 'Create alias for KMS key',
          usage: 'Key aliasing',
          example: `aws kms create-alias --alias-name alias/my-key --target-key-id key-id`,
        },
        {
          command: 'Encrypt with KMS',
          description: 'Encrypt data with KMS',
          usage: 'Data encryption',
          example: `aws kms encrypt --key-id key-id --plaintext file://data.txt --output text --query CiphertextBlob | base64 --decode > encrypted.bin`,
        },
        {
          command: 'Decrypt with KMS',
          description: 'Decrypt data with KMS',
          usage: 'Data decryption',
          example: `aws kms decrypt --ciphertext-blob fileb://encrypted.bin --output text --query Plaintext | base64 --decode > decrypted.txt`,
        },
      ],
    },
    {
      title: 'Expert Level - Cost Management',
      commands: [
        {
          command: 'Get Cost Explorer Dimensions',
          description: 'Get available cost dimensions',
          usage: 'Cost analysis setup',
          example: `aws ce get-dimension-values --time-period Start=2023-01-01,End=2023-01-31 --dimension SERVICE`,
        },
        {
          command: 'Get Cost and Usage',
          description: 'Get cost and usage data',
          usage: 'Cost analysis',
          example: `aws ce get-cost-and-usage \\
    --time-period Start=2023-01-01,End=2023-01-31 \\
    --granularity MONTHLY \\
    --metrics BlendedCost \\
    --group-by Type=DIMENSION,Key=SERVICE`,
        },
        {
          command: 'Get Cost Forecast',
          description: 'Get cost forecast',
          usage: 'Cost prediction',
          example: `aws ce get-cost-forecast \\
    --time-period Start=2023-02-01,End=2023-02-28 \\
    --metric BLENDED_COST \\
    --granularity MONTHLY`,
        },
        {
          command: 'Get Usage Forecast',
          description: 'Get usage forecast',
          usage: 'Usage prediction',
          example: `aws ce get-usage-forecast \\
    --time-period Start=2023-02-01,End=2023-02-28 \\
    --metric USAGE_QUANTITY \\
    --granularity DAILY`,
        },
        {
          command: 'List Cost Allocation Tags',
          description: 'List cost allocation tags',
          usage: 'Cost tagging',
          example: `aws ce list-cost-allocation-tags --status Active`,
        },
        {
          command: 'Get Rightsizing Recommendations',
          description: 'Get rightsizing recommendations',
          usage: 'Cost optimization',
          example: `aws ce get-rightsizing-recommendation --service EC2`,
        },
        {
          command: 'Get Savings Plans Purchase Recommendations',
          description: 'Get Savings Plans recommendations',
          usage: 'Savings optimization',
          example: `aws ce get-savings-plans-purchase-recommendation \\
    --savings-plans-type COMPUTE \\
    --term-in-years ONE_YEAR \\
    --payment-option ALL_UPFRONT \\
    --account-scope PAYER`,
        },
        {
          command: 'Get Reservation Purchase Recommendations',
          description: 'Get reservation recommendations',
          usage: 'Reservation optimization',
          example: `aws ce get-reservation-purchase-recommendation \\
    --service EC2 \\
    --instance-family m5 \\
    --product-description Linux/UNIX`,
        },
        {
          command: 'Create Cost Anomaly Monitor',
          description: 'Create cost anomaly monitor',
          usage: 'Anomaly detection',
          example: `aws ce create-cost-anomaly-monitor \\
    --monitor-name my-monitor \\
    --monitor-type DIMENSIONAL \\
    --monitor-dimension SERVICE`,
        },
        {
          command: 'Create Cost Anomaly Subscription',
          description: 'Create cost anomaly subscription',
          usage: 'Anomaly alerts',
          example: `aws ce create-cost-anomaly-subscription \\
    --monitor-arn monitor-arn \\
    --threshold 100 \\
    --frequency DAILY \\
    --subscriber email@example.com`,
        },
        {
          command: 'Get Cost Anomaly Monitors',
          description: 'List cost anomaly monitors',
          usage: 'Anomaly monitoring',
          example: `aws ce get-cost-anomaly-monitors`,
        },
        {
          command: 'Get Cost Anomaly Subscriptions',
          description: 'List cost anomaly subscriptions',
          usage: 'Anomaly subscriptions',
          example: `aws ce get-cost-anomaly-subscriptions`,
        },
        {
          command: 'Get Budgets',
          description: 'List AWS budgets',
          usage: 'Budget management',
          example: `aws budgets describe-budgets --account-id 123456789012`,
        },
        {
          command: 'Create Budget',
          description: 'Create AWS budget',
          usage: 'Budget creation',
          example: `aws budgets create-budget \\
    --account-id 123456789012 \\
    --budget file://budget.json \\
    --notifications-with-subscribers file://notifications.json`,
        },
        {
          command: 'Update Budget',
          description: 'Update existing budget',
          usage: 'Budget modification',
          example: `aws budgets modify-budget \\
    --account-id 123456789012 \\
    --new-budget file://updated-budget.json`,
        },
        {
          command: 'Delete Budget',
          description: 'Delete AWS budget',
          usage: 'Budget management',
          example: `aws budgets delete-budget \\
    --account-id 123456789012 \\
    --budget-name my-budget`,
        },
        {
          command: 'Get Cost Categories',
          description: 'List cost categories',
          usage: 'Cost categorization',
          example: `aws ce describe-cost-categories --time-period Start=2023-01-01,End=2023-01-31`,
        },
        {
          command: 'Create Cost Category',
          description: 'Create cost category',
          usage: 'Cost categorization',
          example: `aws ce create-cost-category \\
    --name my-cost-category \\
    --rule file://cost-category-rule.json \\
    --effective-start 2023-01-01`,
        },
        {
          command: 'Update Cost Category',
          description: 'Update cost category',
          usage: 'Cost categorization',
          example: `aws ce update-cost-category \\
    --name my-cost-category \\
    --rule file://updated-cost-category-rule.json \\
    --effective-start 2023-02-01`,
        },
        {
          command: 'Delete Cost Category',
          description: 'Delete cost category',
          usage: 'Cost categorization',
          example: `aws ce delete-cost-category --name my-cost-category`,
        },
      ],
    },
  ],
};
