import { Code } from 'lucide-react';

export const azureCliCheatsheet = {
  id: 'azure-cli',
  name: 'Azure CLI',
  description: 'Master Azure CLI from basics to expert operations (2024 Edition)',
  icon: Code,
  colorTheme: 'blue' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Azure CLI',
      commands: [
        {
          command: 'Azure CLI Overview',
          description: 'Azure CLI fundamentals and capabilities',
          usage: 'Understanding Azure CLI basics',
          example: `Azure Command Line Interface is Microsoft's cross-platform command-line tool for managing Azure resources

Key Features:
- Official command-line tool for Azure
- Manage all Azure services from terminal
- Automate cloud operations
- Scriptable and integratable
- Cross-platform support

Supported Platforms:
- Windows (PowerShell, CMD)
- macOS (Terminal, zsh, bash)
- Linux (bash, zsh, fish)
- Docker containers
- Azure Cloud Shell

Prerequisites:
- Azure subscription
- Azure account with appropriate permissions
- Internet connectivity
- Bash/PowerShell environment`,
        },
        {
          command: 'Install Azure CLI on macOS',
          description: 'Install Azure CLI on macOS using Homebrew',
          usage: 'macOS installation',
          example: `brew install azure-cli`,
        },
        {
          command: 'Install Azure CLI on Linux (Debian/Ubuntu)',
          description: 'Install Azure CLI on Debian/Ubuntu systems',
          usage: 'Linux installation',
          example: `curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
sudo apt-get update
sudo apt-get install azure-cli`,
        },
        {
          command: 'Install Azure CLI on Windows (PowerShell)',
          description: 'Install Azure CLI on Windows using PowerShell',
          usage: 'Windows installation',
          example: `Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile AzureCLI.msi
Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'`,
        },
        {
          command: 'Install Azure CLI with Chocolatey',
          description: 'Install Azure CLI using Chocolatey package manager',
          usage: 'Windows installation',
          example: `choco install azure-cli`,
        },
        {
          command: 'Verify Azure CLI Installation',
          description: 'Check Azure CLI version and installation',
          usage: 'Installation verification',
          example: `az --version
az --help`,
        },
        {
          command: 'Update Azure CLI (macOS)',
          description: 'Update Azure CLI on macOS using Homebrew',
          usage: 'CLI updates',
          example: `brew update && brew upgrade azure-cli`,
        },
        {
          command: 'Update Azure CLI (Linux)',
          description: 'Update Azure CLI on Linux using apt',
          usage: 'CLI updates',
          example: `sudo apt-get update && sudo apt-get install --only-upgrade azure-cli`,
        },
        {
          command: 'Interactive Azure Login',
          description: 'Login to Azure interactively',
          usage: 'Authentication',
          example: `az login`,
        },
        {
          command: 'Login with Device Code',
          description: 'Login using device code flow',
          usage: 'Authentication',
          example: `az login --use-device-code`,
        },
        {
          command: 'Login with Service Principal',
          description: 'Login using service principal credentials',
          usage: 'Service authentication',
          example: `az login --service-principal -u http://azure-cli -p password --tenant tenant-id`,
        },
        {
          command: 'List Azure Subscriptions',
          description: 'List all available Azure subscriptions',
          usage: 'Subscription management',
          example: `az account list`,
        },
        {
          command: 'Show Current Subscription',
          description: 'Display current active subscription',
          usage: 'Subscription management',
          example: `az account show`,
        },
        {
          command: 'Set Active Subscription',
          description: 'Set the active Azure subscription',
          usage: 'Subscription management',
          example: `az account set --subscription "Subscription Name"`,
        },
        {
          command: 'List Available Locations',
          description: 'List all available Azure locations',
          usage: 'Location planning',
          example: `az account list-locations`,
        },
        {
          command: 'Create Resource Group',
          description: 'Create a new Azure resource group',
          usage: 'Resource management',
          example: `az group create --name myGroup --location eastus`,
        },
        {
          command: 'List Resource Groups',
          description: 'List all resource groups in subscription',
          usage: 'Resource management',
          example: `az group list`,
        },
        {
          command: 'Show Resource Group Details',
          description: 'Get details for specific resource group',
          usage: 'Resource management',
          example: `az group show --name myGroup`,
        },
        {
          command: 'Delete Resource Group',
          description: 'Delete a resource group and all its resources',
          usage: 'Resource management',
          example: `az group delete --name myGroup`,
        },
        {
          command: 'Check Resource Group Exists',
          description: 'Check if resource group exists',
          usage: 'Resource validation',
          example: `az group exists --name myGroup`,
        },
        {
          command: 'Configure Default Location',
          description: 'Set default location for Azure CLI',
          usage: 'CLI configuration',
          example: `az configure set defaults.location=eastus`,
        },
        {
          command: 'Configure Default Resource Group',
          description: 'Set default resource group for Azure CLI',
          usage: 'CLI configuration',
          example: `az configure set defaults.group=myResourceGroup`,
        },
        {
          command: 'Set Default Output Format',
          description: 'Configure default output format for CLI commands',
          usage: 'CLI configuration',
          example: `az configure set defaults.output=json`,
        },
        {
          command: 'List All Resources',
          description: 'List all resources in subscription',
          usage: 'Resource management',
          example: `az resource list`,
        },
        {
          command: 'List Resources in Resource Group',
          description: 'List all resources in a specific resource group',
          usage: 'Resource management',
          example: `az resource list --resource-group myGroup`,
        },
        {
          command: 'Show Resource Details',
          description: 'Get details for specific resource by ID',
          usage: 'Resource management',
          example: `az resource show --id /subscriptions/sub-id/resourceGroups/group-name/providers/Microsoft.Compute/virtualMachines/vm-name`,
        },
        {
          command: 'Filter Resources by Location',
          description: 'Filter resources by specific location',
          usage: 'Resource filtering',
          example: `az vm list --query "[?location=='eastus']"`,
        },
        {
          command: 'Filter Resources by Name',
          description: 'Filter resources by name pattern',
          usage: 'Resource filtering',
          example: `az vm list --query "[?contains(name, 'prod')]"`,
        },
        {
          command: 'Sort Resources by Name',
          description: 'Sort resource list by name',
          usage: 'Resource sorting',
          example: `az vm list --query "sort_by([], &name)"`,
        },
        {
          command: 'Limit Query Results',
          description: 'Limit number of results returned',
          usage: 'Query optimization',
          example: `az vm list --top 10`,
        },
        {
          command: 'Output in Table Format',
          description: 'Display command output in table format',
          usage: 'Output formatting',
          example: `az group list --output table`,
        },
        {
          command: 'Output in JSON Format',
          description: 'Display command output in JSON format',
          usage: 'Output formatting',
          example: `az group list --output json`,
        },
        {
          command: 'Output in TSV Format',
          description: 'Display command output in TSV format',
          usage: 'Output formatting',
          example: `az group list --output tsv`,
        },
        {
          command: 'Output in YAML Format',
          description: 'Display command output in YAML format',
          usage: 'Output formatting',
          example: `az group list --output yaml`,
        },
        {
          command: 'JMESPath Query for Fields',
          description: 'Select specific fields using JMESPath',
          usage: 'Query filtering',
          example: `az group list --query "[].{name:name,location:location}"`,
        },
        {
          command: 'Add Tag to Resource Group',
          description: 'Add tag to Azure resource group',
          usage: 'Resource tagging',
          example: `az group update --name myGroup --set tags.environment=prod`,
        },
        {
          command: 'Remove Tag from Resource Group',
          description: 'Remove tag from Azure resource group',
          usage: 'Resource tagging',
          example: `az group update --name myGroup --remove tags.environment`,
        },
        {
          command: 'Show Resource Group Tags',
          description: 'Display tags for resource group',
          usage: 'Resource tagging',
          example: `az group show --name myGroup --query tags`,
        },
        {
          command: 'Deploy ARM Template',
          description: 'Deploy Azure Resource Manager template',
          usage: 'Resource deployment',
          example: `az deployment group create --resource-group myGroup --template-file template.json`,
        },
        {
          command: 'List Deployments',
          description: 'List deployments in resource group',
          usage: 'Deployment management',
          example: `az deployment group list --resource-group myGroup`,
        },
        {
          command: 'Show Deployment Details',
          description: 'Get details for specific deployment',
          usage: 'Deployment management',
          example: `az deployment group show --resource-group myGroup --name deployment-name`,
        },
        {
          command: 'Get Access Token',
          description: 'Get Azure access token for API calls',
          usage: 'Authentication',
          example: `az account get-access-token`,
        },
        {
          command: 'Get Graph API Token',
          description: 'Get Microsoft Graph API access token',
          usage: 'Authentication',
          example: `az account get-access-token --resource https://graph.microsoft.com`,
        },
        {
          command: 'List Available Clouds',
          description: 'List available Azure clouds',
          usage: 'Cloud management',
          example: `az cloud list`,
        },
        {
          command: 'Set Active Cloud',
          description: 'Set active Azure cloud',
          usage: 'Cloud management',
          example: `az cloud set --name AzureCloud`,
        },
        {
          command: 'Show Cloud Details',
          description: 'Show details for specific cloud',
          usage: 'Cloud management',
          example: `az cloud show --name AzureCloud`,
        },
        {
          command: 'Logout from Azure',
          description: 'Logout from current Azure account',
          usage: 'Authentication',
          example: `az logout`,
        },
        {
          command: 'Logout from All Accounts',
          description: 'Logout from all Azure accounts',
          usage: 'Authentication',
          example: `az logout --all`,
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Core Azure Services - Virtual Machines',
      commands: [
        {
          command: 'List All VMs',
          description: 'List all virtual machines in subscription',
          usage: 'VM enumeration',
          example: `az vm list`,
        },
        {
          command: 'Show VM Details',
          description: 'Get details for specific virtual machine',
          usage: 'VM management',
          example: `az vm show --name myVM --resource-group myGroup`,
        },
        {
          command: 'List VM Sizes',
          description: 'List available VM sizes in location',
          usage: 'VM planning',
          example: `az vm list-sizes --location eastus`,
        },
        {
          command: 'List VM SKUs',
          description: 'List available VM SKUs in location',
          usage: 'VM planning',
          example: `az vm list-skus --location eastus`,
        },
        {
          command: 'Create Ubuntu VM',
          description: 'Create Ubuntu virtual machine with SSH keys',
          usage: 'VM creation',
          example: `az vm create \\
    --resource-group myGroup \\
    --name myVM \\
    --image UbuntuLTS \\
    --admin-username azureuser \\
    --generate-ssh-keys \\
    --size Standard_B1s`,
        },
        {
          command: 'Create Windows VM',
          description: 'Create Windows virtual machine with password',
          usage: 'VM creation',
          example: `az vm create \\
    --resource-group myGroup \\
    --name myVM \\
    --image Win2019Datacenter \\
    --admin-username azureuser \\
    --admin-password MyPassword123! \\
    --size Standard_D2s_v3 \\
    --availability-zone 1`,
        },
        {
          command: 'Start VM',
          description: 'Start a virtual machine',
          usage: 'VM operations',
          example: `az vm start --name myVM --resource-group myGroup`,
        },
        {
          command: 'Stop VM',
          description: 'Stop a virtual machine',
          usage: 'VM operations',
          example: `az vm stop --name myVM --resource-group myGroup`,
        },
        {
          command: 'Restart VM',
          description: 'Restart a virtual machine',
          usage: 'VM operations',
          example: `az vm restart --name myVM --resource-group myGroup`,
        },
        {
          command: 'Deallocate VM',
          description: 'Deallocate virtual machine to stop billing',
          usage: 'VM operations',
          example: `az vm deallocate --name myVM --resource-group myGroup`,
        },
        {
          command: 'Delete VM',
          description: 'Delete virtual machine',
          usage: 'VM operations',
          example: `az vm delete --name myVM --resource-group myGroup --yes`,
        },
        {
          command: 'List Ubuntu Images',
          description: 'List available Ubuntu VM images',
          usage: 'VM image selection',
          example: `az vm image list --publisher Canonical --offer UbuntuServer --all`,
        },
        {
          command: 'Show Image Details',
          description: 'Get details for specific VM image',
          usage: 'VM image details',
          example: `az vm image show --urn Canonical:UbuntuServer:18.04-LTS:latest`,
        },
        {
          command: 'List VM Disks',
          description: 'List disks in resource group',
          usage: 'Disk management',
          example: `az vm disk list --resource-group myGroup`,
        },
        {
          command: 'Show Disk Details',
          description: 'Get details for specific disk',
          usage: 'Disk management',
          example: `az vm disk show --name myDisk --resource-group myGroup`,
        },
        {
          command: 'Create Data Disk',
          description: 'Create new data disk',
          usage: 'Disk management',
          example: `az vm disk create --resource-group myGroup --name myDisk --size-gb 32`,
        },
        {
          command: 'Attach Disk to VM',
          description: 'Attach data disk to virtual machine',
          usage: 'Disk management',
          example: `az vm disk attach --resource-group myGroup --vm-name myVM --name myDisk`,
        },
        {
          command: 'Set VM Extension',
          description: 'Install VM extension for custom scripts',
          usage: 'VM extensions',
          example: `az vm extension set \\
    --resource-group myGroup \\
    --vm-name myVM \\
    --name CustomScript \\
    --publisher Microsoft.Azure.Extensions \\
    --version 2.0 \\
    --protected-settings file://config.json`,
        },
        {
          command: 'Create VM Scale Set',
          description: 'Create virtual machine scale set',
          usage: 'Scaling',
          example: `az vmss create --resource-group myGroup --name myScaleSet --image UbuntuLTS --admin-username azureuser --generate-ssh-keys --vm-sku Standard_B1s --instance-count 3`,
        },
        {
          command: 'Scale VM Scale Set',
          description: 'Change instance count of VM scale set',
          usage: 'Scaling',
          example: `az vmss scale --resource-group myGroup --name myScaleSet --new-capacity 5`,
        },
        {
          command: 'List VM Scale Sets',
          description: 'List all VM scale sets',
          usage: 'Scaling',
          example: `az vmss list`,
        },
        {
          command: 'Show VM Scale Set Details',
          description: 'Get details for VM scale set',
          usage: 'Scaling',
          example: `az vmss show --resource-group myGroup --name myScaleSet`,
        },
        {
          command: 'Get VM Instance View',
          description: 'Get instance view status of VM',
          usage: 'VM monitoring',
          example: `az vm get-instance-view --name myVM --resource-group myGroup`,
        },
      ],
    },
    {
      title: 'Core Azure Services - Storage Accounts',
      commands: [
        {
          command: 'List Storage Accounts',
          description: 'List all storage accounts in subscription',
          usage: 'Storage enumeration',
          example: `az storage account list`,
        },
        {
          command: 'Show Storage Account Details',
          description: 'Get details for specific storage account',
          usage: 'Storage management',
          example: `az storage account show --name myStorageAccount --resource-group myGroup`,
        },
        {
          command: 'Check Storage Account Name',
          description: 'Check if storage account name is available',
          usage: 'Storage planning',
          example: `az storage account check-name --name myStorageAccount`,
        },
        {
          command: 'Create Storage Account',
          description: 'Create new Azure storage account',
          usage: 'Storage creation',
          example: `az storage account create \\
    --name mystorageaccount \\
    --resource-group myGroup \\
    --location eastus \\
    --sku Standard_LRS \\
    --kind StorageV2 \\
    --access-tier Hot`,
        },
        {
          command: 'Delete Storage Account',
          description: 'Delete storage account',
          usage: 'Storage management',
          example: `az storage account delete --name myStorageAccount --resource-group myGroup`,
        },
        {
          command: 'List Storage Account Keys',
          description: 'List access keys for storage account',
          usage: 'Storage security',
          example: `az storage account keys list --account-name mystorageaccount`,
        },
        {
          command: 'Renew Storage Account Key',
          description: 'Regenerate storage account access key',
          usage: 'Storage security',
          example: `az storage account keys renew --account-name mystorageaccount --key key1`,
        },
        {
          command: 'Update Storage Account',
          description: 'Update storage account properties',
          usage: 'Storage management',
          example: `az storage account update --name mystorageaccount --resource-group myGroup --set tags.environment=prod`,
        },
        {
          command: 'Create Storage Container',
          description: 'Create blob container in storage account',
          usage: 'Blob storage',
          example: `az storage container create --account-name mystorageaccount --name mycontainer`,
        },
        {
          command: 'List Storage Containers',
          description: 'List containers in storage account',
          usage: 'Blob storage',
          example: `az storage container list --account-name mystorageaccount`,
        },
        {
          command: 'Delete Storage Container',
          description: 'Delete blob container',
          usage: 'Blob storage',
          example: `az storage container delete --account-name mystorageaccount --name mycontainer`,
        },
        {
          command: 'List Blobs in Container',
          description: 'List all blobs in container',
          usage: 'Blob storage',
          example: `az storage blob list --account-name mystorageaccount --container-name mycontainer`,
        },
        {
          command: 'Upload Blob to Container',
          description: 'Upload file to blob storage',
          usage: 'Blob storage',
          example: `az storage blob upload --account-name mystorageaccount --container-name mycontainer --name myfile.txt --file myfile.txt`,
        },
        {
          command: 'Download Blob from Container',
          description: 'Download file from blob storage',
          usage: 'Blob storage',
          example: `az storage blob download --account-name mystorageaccount --container-name mycontainer --name myfile.txt --file downloaded.txt`,
        },
        {
          command: 'Delete Blob from Container',
          description: 'Delete blob from storage',
          usage: 'Blob storage',
          example: `az storage blob delete --account-name mystorageaccount --container-name mycontainer --name myfile.txt`,
        },
        {
          command: 'Create File Share',
          description: 'Create Azure file share',
          usage: 'File storage',
          example: `az storage share create --account-name mystorageaccount --name myshare`,
        },
        {
          command: 'Upload File to Share',
          description: 'Upload file to Azure file share',
          usage: 'File storage',
          example: `az storage file upload --account-name mystorageaccount --share-name myshare --path myfile.txt --source myfile.txt`,
        },
        {
          command: 'Download File from Share',
          description: 'Download file from Azure file share',
          usage: 'File storage',
          example: `az storage file download --account-name mystorageaccount --share-name myshare --path myfile.txt --dest downloaded.txt`,
        },
        {
          command: 'Delete File from Share',
          description: 'Delete file from Azure file share',
          usage: 'File storage',
          example: `az storage file delete --account-name mystorageaccount --share-name myshare --path myfile.txt`,
        },
        {
          command: 'Create Storage Queue',
          description: 'Create Azure storage queue',
          usage: 'Queue storage',
          example: `az storage queue create --account-name mystorageaccount --name myqueue`,
        },
        {
          command: 'List Storage Queues',
          description: 'List queues in storage account',
          usage: 'Queue storage',
          example: `az storage queue list --account-name mystorageaccount`,
        },
        {
          command: 'Put Message in Queue',
          description: 'Add message to storage queue',
          usage: 'Queue storage',
          example: `az storage message put --account-name mystorageaccount --queue-name myqueue --content "Hello World"`,
        },
        {
          command: 'Get Messages from Queue',
          description: 'Retrieve messages from storage queue',
          usage: 'Queue storage',
          example: `az storage message get --account-name mystorageaccount --queue-name myqueue`,
        },
      ],
    },
    {
      title: 'Core Azure Services - Networking',
      commands: [
        {
          command: 'List Virtual Networks',
          description: 'List all virtual networks in subscription',
          usage: 'VNet enumeration',
          example: `az network vnet list`,
        },
        {
          command: 'Show VNet Details',
          description: 'Get details for specific virtual network',
          usage: 'VNet management',
          example: `az network vnet show --name myVNet --resource-group myGroup`,
        },
        {
          command: 'Create Virtual Network',
          description: 'Create new virtual network',
          usage: 'VNet creation',
          example: `az network vnet create --resource-group myGroup --name myVNet --address-prefix 10.0.0.0/16`,
        },
        {
          command: 'Delete Virtual Network',
          description: 'Delete virtual network',
          usage: 'VNet management',
          example: `az network vnet delete --name myVNet --resource-group myGroup`,
        },
        {
          command: 'List VNet Subnets',
          description: 'List subnets in virtual network',
          usage: 'Subnet management',
          example: `az network vnet subnet list --resource-group myGroup --vnet-name myVNet`,
        },
        {
          command: 'Show Subnet Details',
          description: 'Get details for specific subnet',
          usage: 'Subnet management',
          example: `az network vnet subnet show --resource-group myGroup --vnet-name myVNet --name mySubnet`,
        },
        {
          command: 'Create VNet Subnet',
          description: 'Create subnet in virtual network',
          usage: 'Subnet creation',
          example: `az network vnet subnet create --resource-group myGroup --vnet-name myVNet --name mySubnet --address-prefix 10.0.1.0/24`,
        },
        {
          command: 'Delete VNet Subnet',
          description: 'Delete subnet from virtual network',
          usage: 'Subnet management',
          example: `az network vnet subnet delete --resource-group myGroup --vnet-name myVNet --name mySubnet`,
        },
        {
          command: 'List Network Security Groups',
          description: 'List all network security groups',
          usage: 'NSG enumeration',
          example: `az network nsg list`,
        },
        {
          command: 'Show NSG Details',
          description: 'Get details for network security group',
          usage: 'NSG management',
          example: `az network nsg show --name myNSG --resource-group myGroup`,
        },
        {
          command: 'Create Network Security Group',
          description: 'Create new network security group',
          usage: 'NSG creation',
          example: `az network nsg create --resource-group myGroup --name myNSG`,
        },
        {
          command: 'Create NSG Rule',
          description: 'Create rule in network security group',
          usage: 'NSG rules',
          example: `az network nsg rule create \\
    --resource-group myGroup \\
    --nsg-name myNSG \\
    --name AllowSSH \\
    --protocol tcp \\
    --direction inbound \\
    --priority 1000 \\
    --source-address-prefix "*" \\
    --source-port-range "*" \\
    --destination-address-prefix "*" \\
    --destination-port-range 22 \\
    --access allow`,
        },
        {
          command: 'List Network Interfaces',
          description: 'List all network interfaces',
          usage: 'NIC enumeration',
          example: `az network nic list`,
        },
        {
          command: 'Show NIC Details',
          description: 'Get details for network interface',
          usage: 'NIC management',
          example: `az network nic show --name myNIC --resource-group myGroup`,
        },
        {
          command: 'Create Network Interface',
          description: 'Create network interface in VNet',
          usage: 'NIC creation',
          example: `az network nic create --resource-group myGroup --name myNIC --vnet-name myVNet --subnet mySubnet`,
        },
        {
          command: 'List Public IP Addresses',
          description: 'List all public IP addresses',
          usage: 'Public IP enumeration',
          example: `az network public-ip list`,
        },
        {
          command: 'Show Public IP Details',
          description: 'Get details for public IP address',
          usage: 'Public IP management',
          example: `az network public-ip show --name myPublicIP --resource-group myGroup`,
        },
        {
          command: 'Create Public IP Address',
          description: 'Create new public IP address',
          usage: 'Public IP creation',
          example: `az network public-ip create --resource-group myGroup --name myPublicIP --allocation-method Static`,
        },
        {
          command: 'List Load Balancers',
          description: 'List all load balancers',
          usage: 'Load balancer enumeration',
          example: `az network lb list`,
        },
        {
          command: 'Show Load Balancer Details',
          description: 'Get details for load balancer',
          usage: 'Load balancer management',
          example: `az network lb show --name myLB --resource-group myGroup`,
        },
        {
          command: 'Create Load Balancer',
          description: 'Create new load balancer',
          usage: 'Load balancer creation',
          example: `az network lb create \\
    --resource-group myGroup \\
    --name myLB \\
    --frontend-ip-name myFrontend \\
    --backend-pool-name myBackend \\
    --public-ip-address myPublicIP`,
        },
        {
          command: 'Create NAT Gateway',
          description: 'Create NAT gateway for VNet',
          usage: 'NAT gateway',
          example: `az network nat gateway create --resource-group myGroup --name myNAT --public-ip-address myPublicIP --location eastus`,
        },
        {
          command: 'Create Route Table',
          description: 'Create route table for VNet',
          usage: 'Routing',
          example: `az network route-table create --resource-group myGroup --name myRouteTable --location eastus`,
        },
        {
          command: 'Create Route in Route Table',
          description: 'Add route to route table',
          usage: 'Routing',
          example: `az network route-table route create --resource-group myGroup --route-table-name myRouteTable --name myRoute --address-prefix 0.0.0.0/0 --next-hop-type Internet`,
        },
      ],
    },
    {
      title: 'Core Azure Services - App Services and Functions',
      commands: [
        {
          command: 'List Function Apps',
          description: 'List all function apps in subscription',
          usage: 'Function app enumeration',
          example: `az functionapp list`,
        },
        {
          command: 'Show Function App Details',
          description: 'Get details for specific function app',
          usage: 'Function app management',
          example: `az functionapp show --name myFunctionApp --resource-group myGroup`,
        },
        {
          command: 'Create Function App',
          description: 'Create new Azure function app',
          usage: 'Function app creation',
          example: `az functionapp create --resource-group myGroup --consumption-plan-location eastus --name myFunctionApp --storage-account mystorageaccount`,
        },
        {
          command: 'Start Function App',
          description: 'Start function app',
          usage: 'Function app operations',
          example: `az functionapp start --name myFunctionApp --resource-group myGroup`,
        },
        {
          command: 'Stop Function App',
          description: 'Stop function app',
          usage: 'Function app operations',
          example: `az functionapp stop --name myFunctionApp --resource-group myGroup`,
        },
        {
          command: 'Restart Function App',
          description: 'Restart function app',
          usage: 'Function app operations',
          example: `az functionapp restart --name myFunctionApp --resource-group myGroup`,
        },
        {
          command: 'Delete Function App',
          description: 'Delete function app',
          usage: 'Function app operations',
          example: `az functionapp delete --name myFunctionApp --resource-group myGroup`,
        },
        {
          command: 'Deploy Function App from Zip',
          description: 'Deploy function app from zip file',
          usage: 'Function deployment',
          example: `az functionapp deployment source config-zip --resource-group myGroup --name myFunctionApp --src myFunctionApp.zip`,
        },
        {
          command: 'Deploy Function App from GitHub',
          description: 'Deploy function app from GitHub repository',
          usage: 'Function deployment',
          example: `az functionapp deployment source config-zip --resource-group myGroup --name myFunctionApp --src https://github.com/user/repo/archive/refs/heads/main.zip`,
        },
        {
          command: 'List Web Apps',
          description: 'List all web apps in subscription',
          usage: 'Web app enumeration',
          example: `az webapp list`,
        },
        {
          command: 'Show Web App Details',
          description: 'Get details for specific web app',
          usage: 'Web app management',
          example: `az webapp show --name myWebApp --resource-group myGroup`,
        },
        {
          command: 'Create Web App',
          description: 'Create new Azure web app',
          usage: 'Web app creation',
          example: `az webapp create --resource-group myGroup --plan myAppServicePlan --name myWebApp --runtime "NODE|14-lts"`,
        },
        {
          command: 'Start Web App',
          description: 'Start web app',
          usage: 'Web app operations',
          example: `az webapp start --name myWebApp --resource-group myGroup`,
        },
        {
          command: 'Stop Web App',
          description: 'Stop web app',
          usage: 'Web app operations',
          example: `az webapp stop --name myWebApp --resource-group myGroup`,
        },
        {
          command: 'Restart Web App',
          description: 'Restart web app',
          usage: 'Web app operations',
          example: `az webapp restart --name myWebApp --resource-group myGroup`,
        },
        {
          command: 'Delete Web App',
          description: 'Delete web app',
          usage: 'Web app operations',
          example: `az webapp delete --name myWebApp --resource-group myGroup`,
        },
        {
          command: 'Deploy Web App from Zip',
          description: 'Deploy web app from zip file',
          usage: 'Web app deployment',
          example: `az webapp deployment source config-zip --resource-group myGroup --name myWebApp --src myWebApp.zip`,
        },
        {
          command: 'Deploy Web App Quick',
          description: 'Deploy and configure web app quickly',
          usage: 'Web app deployment',
          example: `az webapp up --resource-group myGroup --name myWebApp --location eastus`,
        },
        {
          command: 'List App Service Plans',
          description: 'List all app service plans',
          usage: 'App service plan management',
          example: `az appservice plan list`,
        },
        {
          command: 'Create App Service Plan',
          description: 'Create new app service plan',
          usage: 'App service plan creation',
          example: `az appservice plan create --resource-group myGroup --name myAppServicePlan --sku B1 --is-linux`,
        },
        {
          command: 'Show App Service Plan Details',
          description: 'Get details for app service plan',
          usage: 'App service plan management',
          example: `az appservice plan show --name myAppServicePlan --resource-group myGroup`,
        },
        {
          command: 'Get Web App Logs',
          description: 'Get logs for web app',
          usage: 'Web app monitoring',
          example: `az webapp log tail --name myWebApp --resource-group myGroup`,
        },
      ],
    },
    {
      title: 'Intermediate Services - Azure SQL Database',
      commands: [
        {
          command: 'List SQL Servers',
          description: 'List all SQL servers in subscription',
          usage: 'SQL server enumeration',
          example: `az sql server list`,
        },
        {
          command: 'Show SQL Server Details',
          description: 'Get details for specific SQL server',
          usage: 'SQL server management',
          example: `az sql server show --name myServer --resource-group myGroup`,
        },
        {
          command: 'Create SQL Server',
          description: 'Create new Azure SQL server',
          usage: 'SQL server creation',
          example: `az sql server create --name myServer --resource-group myGroup --location eastus --admin-user myadmin --admin-password MyPassword123!`,
        },
        {
          command: 'Delete SQL Server',
          description: 'Delete SQL server',
          usage: 'SQL server management',
          example: `az sql server delete --name myServer --resource-group myGroup`,
        },
        {
          command: 'List SQL Databases',
          description: 'List databases on SQL server',
          usage: 'Database enumeration',
          example: `az sql db list --server myServer --resource-group myGroup`,
        },
        {
          command: 'Show SQL Database Details',
          description: 'Get details for specific SQL database',
          usage: 'Database management',
          example: `az sql db show --name myDatabase --server myServer --resource-group myGroup`,
        },
        {
          command: 'Create SQL Database',
          description: 'Create new Azure SQL database',
          usage: 'Database creation',
          example: `az sql db create --name myDatabase --server myServer --resource-group myGroup --edition GeneralPurpose --family Gen5 --capacity 2`,
        },
        {
          command: 'Delete SQL Database',
          description: 'Delete SQL database',
          usage: 'Database management',
          example: `az sql db delete --name myDatabase --server myServer --resource-group myGroup --yes`,
        },
        {
          command: 'Rename SQL Database',
          description: 'Rename existing SQL database',
          usage: 'Database management',
          example: `az sql db rename --name myDatabase --server myServer --resource-group myGroup --new-name newDatabaseName`,
        },
        {
          command: 'Copy SQL Database',
          description: 'Create copy of SQL database',
          usage: 'Database management',
          example: `az sql db copy --name myDatabase --server myServer --resource-group myGroup --dest-name copiedDatabase`,
        },
        {
          command: 'Scale Up SQL Database',
          description: 'Increase SQL database capacity',
          usage: 'Database scaling',
          example: `az sql db update --name myDatabase --server myServer --resource-group myGroup --capacity 4`,
        },
        {
          command: 'Move Database to Elastic Pool',
          description: 'Move database to elastic pool',
          usage: 'Database scaling',
          example: `az sql db update --name myDatabase --server myServer --resource-group myGroup --elastic-pool myElasticPool`,
        },
        {
          command: 'List Elastic Pools',
          description: 'List elastic pools on SQL server',
          usage: 'Elastic pool management',
          example: `az sql elastic-pool list --server myServer --resource-group myGroup`,
        },
        {
          command: 'Create Elastic Pool',
          description: 'Create new elastic pool',
          usage: 'Elastic pool creation',
          example: `az sql elastic-pool create --name myPool --server myServer --resource-group myGroup --edition GeneralPurpose --family Gen5 --capacity 2`,
        },
        {
          command: 'Delete Elastic Pool',
          description: 'Delete elastic pool',
          usage: 'Elastic pool management',
          example: `az sql elastic-pool delete --name myPool --server myServer --resource-group myGroup`,
        },
        {
          command: 'Show SQL Audit Policy',
          description: 'Get audit policy for database',
          usage: 'Database security',
          example: `az sql db audit-policy show --name myDatabase --server myServer --resource-group myGroup`,
        },
        {
          command: 'Enable SQL Auditing',
          description: 'Enable auditing for SQL database',
          usage: 'Database security',
          example: `az sql db audit-policy update --name myDatabase --server myServer --resource-group myGroup --state Enabled`,
        },
        {
          command: 'Show SQL Threat Policy',
          description: 'Get threat detection policy',
          usage: 'Database security',
          example: `az sql db threat-policy show --name myDatabase --server myServer --resource-group myGroup`,
        },
        {
          command: 'Enable SQL Threat Detection',
          description: 'Enable threat detection for database',
          usage: 'Database security',
          example: `az sql db threat-policy update --name myDatabase --server myServer --resource-group myGroup --state Enabled --email-admins admin@example.com`,
        },
        {
          command: 'Create SQL Firewall Rule',
          description: 'Create firewall rule for SQL server',
          usage: 'SQL security',
          example: `az sql server firewall-rule create --resource-group myGroup --server myServer --name AllowAzure --start-ip-address 0.0.0.0 --end-ip-address 0.0.0.0`,
        },
        {
          command: 'List SQL Firewall Rules',
          description: 'List firewall rules for SQL server',
          usage: 'SQL security',
          example: `az sql server firewall-rule list --resource-group myGroup --server myServer`,
        },
      ],
    },
    {
      title: 'Intermediate Services - Azure Kubernetes Service (AKS)',
      commands: [
        {
          command: 'List AKS Clusters',
          description: 'List all AKS clusters in subscription',
          usage: 'AKS enumeration',
          example: `az aks list`,
        },
        {
          command: 'Show AKS Cluster Details',
          description: 'Get details for specific AKS cluster',
          usage: 'AKS management',
          example: `az aks show --name myAKSCluster --resource-group myGroup`,
        },
        {
          command: 'Create AKS Cluster',
          description: 'Create new Azure Kubernetes Service cluster',
          usage: 'AKS creation',
          example: `az aks create --resource-group myGroup --name myAKSCluster --node-count 3 --enable-addons monitoring --generate-ssh-keys`,
        },
        {
          command: 'Start AKS Cluster',
          description: 'Start AKS cluster',
          usage: 'AKS operations',
          example: `az aks start --name myAKSCluster --resource-group myGroup`,
        },
        {
          command: 'Stop AKS Cluster',
          description: 'Stop AKS cluster',
          usage: 'AKS operations',
          example: `az aks stop --name myAKSCluster --resource-group myGroup`,
        },
        {
          command: 'Delete AKS Cluster',
          description: 'Delete AKS cluster',
          usage: 'AKS operations',
          example: `az aks delete --name myAKSCluster --resource-group myGroup --yes`,
        },
        {
          command: 'Scale AKS Cluster',
          description: 'Scale number of nodes in AKS cluster',
          usage: 'AKS scaling',
          example: `az aks scale --name myAKSCluster --resource-group myGroup --node-count 5`,
        },
        {
          command: 'Enable Cluster Autoscaler',
          description: 'Enable cluster autoscaler for AKS',
          usage: 'AKS configuration',
          example: `az aks update --resource-group myGroup --name myAKSCluster --enable-cluster-autoscaler --min-count 1 --max-count 5`,
        },
        {
          command: 'Add HTTP Application Routing',
          description: 'Add HTTP application routing addon',
          usage: 'AKS addons',
          example: `az aks update --resource-group myGroup --name myAKSCluster --enable-addons http_application_routing`,
        },
        {
          command: 'Attach ACR to AKS',
          description: 'Attach Azure Container Registry to AKS',
          usage: 'AKS integration',
          example: `az aks update --resource-group myGroup --name myAKSCluster --attach-acr myACR`,
        },
        {
          command: 'List AKS Node Pools',
          description: 'List node pools in AKS cluster',
          usage: 'Node pool management',
          example: `az aks nodepool list --cluster-name myAKSCluster --resource-group myGroup`,
        },
        {
          command: 'Show Node Pool Details',
          description: 'Get details for specific node pool',
          usage: 'Node pool management',
          example: `az aks nodepool show --cluster-name myAKSCluster --resource-group myGroup --name nodepool1`,
        },
        {
          command: 'Add Node Pool to AKS',
          description: 'Add new node pool to AKS cluster',
          usage: 'Node pool management',
          example: `az aks nodepool add --cluster-name myAKSCluster --resource-group myGroup --name nodepool2 --node-count 3 --node-vm-size Standard_B2s`,
        },
        {
          command: 'Delete Node Pool from AKS',
          description: 'Delete node pool from AKS cluster',
          usage: 'Node pool management',
          example: `az aks nodepool delete --cluster-name myAKSCluster --resource-group myGroup --name nodepool2`,
        },
        {
          command: 'Scale Node Pool',
          description: 'Scale node pool size',
          usage: 'Node pool management',
          example: `az aks nodepool scale --cluster-name myAKSCluster --resource-group myGroup --name nodepool1 --node-count 5`,
        },
        {
          command: 'Get AKS Credentials',
          description: 'Get kubeconfig for AKS cluster',
          usage: 'Cluster access',
          example: `az aks get-credentials --resource-group myGroup --name myAKSCluster`,
        },
        {
          command: 'Browse AKS Dashboard',
          description: 'Open Kubernetes dashboard for AKS',
          usage: 'Cluster monitoring',
          example: `az aks browse --resource-group myGroup --name myAKSCluster`,
        },
        {
          command: 'Enable Application Gateway Ingress',
          description: 'Enable Application Gateway ingress controller',
          usage: 'AKS addons',
          example: `az aks enable-addons --resource-group myGroup --name myAKSCluster --addons ingress-appgw --appgw-name myApplicationGateway`,
        },
        {
          command: 'Rotate AKS Cluster Certificates',
          description: 'Rotate cluster certificates',
          usage: 'AKS security',
          example: `az aks rotate-certs --resource-group myGroup --name myAKSCluster`,
        },
      ],
    },
    {
      title: 'Intermediate Services - Azure Monitor and Diagnostics',
      commands: [
        {
          command: 'List Monitor Accounts',
          description: 'List all Azure Monitor accounts',
          usage: 'Monitor enumeration',
          example: `az monitor account list`,
        },
        {
          command: 'Show Monitor Account Details',
          description: 'Get details for monitor account',
          usage: 'Monitor management',
          example: `az monitor account show --name myMonitorAccount --resource-group myGroup`,
        },
        {
          command: 'Create Monitor Account',
          description: 'Create new Azure Monitor account',
          usage: 'Monitor creation',
          example: `az monitor account create --name myMonitorAccount --resource-group myGroup --location eastus`,
        },
        {
          command: 'List Activity Logs',
          description: 'List all activity logs',
          usage: 'Activity monitoring',
          example: `az monitor activity-log list`,
        },
        {
          command: 'List Activity Logs for Resource Group',
          description: 'Get activity logs for specific resource group',
          usage: 'Activity monitoring',
          example: `az monitor activity-log list --resource-group myGroup`,
        },
        {
          command: 'List Activity Logs for Resource Type',
          description: 'Get activity logs for specific resource type',
          usage: 'Activity monitoring',
          example: `az monitor activity-log list --resource-provider Microsoft.Compute/virtualMachines`,
        },
        {
          command: 'List Metrics for Resource',
          description: 'List metrics for specific resource',
          usage: 'Metrics monitoring',
          example: `az monitor metrics list --resource /subscriptions/sub-id/resourceGroups/group-name/providers/Microsoft.Compute/virtualMachines/vm-name`,
        },
        {
          command: 'List Metric Definitions',
          description: 'List available metric definitions',
          usage: 'Metrics monitoring',
          example: `az monitor metrics list-definitions --resource /subscriptions/sub-id/resourceGroups/group-name/providers/Microsoft.Compute/virtualMachines/vm-name`,
        },
        {
          command: 'Get Specific Metrics',
          description: 'Get specific metrics for resource',
          usage: 'Metrics monitoring',
          example: `az monitor metrics list --resource /subscriptions/sub-id/resourceGroups/group-name/providers/Microsoft.Compute/virtualMachines/vm-name --metrics "Percentage CPU" "Network In"`,
        },
        {
          command: 'List Alerts',
          description: 'List all alerts',
          usage: 'Alert management',
          example: `az monitor alert list`,
        },
        {
          command: 'Show Alert Details',
          description: 'Get details for specific alert',
          usage: 'Alert management',
          example: `az monitor alert show --name myAlert --resource-group myGroup`,
        },
        {
          command: 'Create Metric Alert',
          description: 'Create metric-based alert',
          usage: 'Alert creation',
          example: `az monitor metrics alert create \\
    --name myAlert \\
    --resource-group myGroup \\
    --scopes /subscriptions/sub-id/resourceGroups/group-name/providers/Microsoft.Compute/virtualMachines/vm-name \\
    --condition "avg Percentage CPU > 90" \\
    --window-size 5m \\
    --evaluation-frequency 1m \\
    --severity 2`,
        },
        {
          command: 'Create Activity Log Alert',
          description: 'Create activity log alert',
          usage: 'Alert creation',
          example: `az monitor activity-log alert create --name myAlert --resource-group myGroup --scopes /subscriptions/sub-id/resourceGroups/group-name --condition category=Administrative`,
        },
        {
          command: 'List Diagnostic Settings',
          description: 'List diagnostic settings for resource',
          usage: 'Diagnostics configuration',
          example: `az monitor diagnostic-settings list --resource /subscriptions/sub-id/resourceGroups/group-name/providers/Microsoft.Compute/virtualMachines/vm-name`,
        },
        {
          command: 'Create Diagnostic Setting',
          description: 'Create diagnostic setting for resource',
          usage: 'Diagnostics configuration',
          example: `az monitor diagnostic-settings create --name myDiagnosticSetting --resource /subscriptions/sub-id/resourceGroups/group-name/providers/Microsoft.Compute/virtualMachines/vm-name --workspace myWorkspace`,
        },
        {
          command: 'List Log Analytics Workspaces',
          description: 'List all Log Analytics workspaces',
          usage: 'Log management',
          example: `az monitor log-analytics workspace list`,
        },
        {
          command: 'Create Log Analytics Workspace',
          description: 'Create new Log Analytics workspace',
          usage: 'Log management',
          example: `az monitor log-analytics workspace create --resource-group myGroup --name myWorkspace --location eastus`,
        },
        {
          command: 'Query Log Analytics',
          description: 'Execute query against Log Analytics',
          usage: 'Log analysis',
          example: `az monitor log-analytics query --workspace myWorkspace --analytics-query "AzureActivity | summarize count() by Category"`,
        },
      ],
    },
    {
      title: 'Intermediate Services - Azure Key Vault',
      commands: [
        {
          command: 'List Key Vaults',
          description: 'List all key vaults in subscription',
          usage: 'Key vault enumeration',
          example: `az keyvault list`,
        },
        {
          command: 'Show Key Vault Details',
          description: 'Get details for specific key vault',
          usage: 'Key vault management',
          example: `az keyvault show --name myKeyVault --resource-group myGroup`,
        },
        {
          command: 'Create Key Vault',
          description: 'Create new Azure Key Vault',
          usage: 'Key vault creation',
          example: `az keyvault create --name myKeyVault --resource-group myGroup --location eastus --enable-soft-delete true --enable-purge-protection true`,
        },
        {
          command: 'Delete Key Vault',
          description: 'Delete key vault',
          usage: 'Key vault management',
          example: `az keyvault delete --name myKeyVault --resource-group myGroup`,
        },
        {
          command: 'Purge Deleted Key Vault',
          description: 'Permanently purge deleted key vault',
          usage: 'Key vault management',
          example: `az keyvault purge --name myKeyVault --location eastus`,
        },
        {
          command: 'Update Key Vault',
          description: 'Update key vault properties',
          usage: 'Key vault management',
          example: `az keyvault update --name myKeyVault --resource-group myGroup --set tags.environment=prod`,
        },
        {
          command: 'List Key Vault Secrets',
          description: 'List secrets in key vault',
          usage: 'Secret management',
          example: `az keyvault secret list --vault-name myKeyVault`,
        },
        {
          command: 'Show Secret Details',
          description: 'Get details for specific secret',
          usage: 'Secret management',
          example: `az keyvault secret show --vault-name myKeyVault --name mySecret`,
        },
        {
          command: 'Set Secret',
          description: 'Create or update secret in key vault',
          usage: 'Secret management',
          example: `az keyvault secret set --vault-name myKeyVault --name mySecret --value "MySecretValue"`,
        },
        {
          command: 'Delete Secret',
          description: 'Delete secret from key vault',
          usage: 'Secret management',
          example: `az keyvault secret delete --vault-name myKeyVault --name mySecret`,
        },
        {
          command: 'Backup Secret',
          description: 'Backup secret from key vault',
          usage: 'Secret backup',
          example: `az keyvault secret backup --vault-name myKeyVault --name mySecret --file backup.txt`,
        },
        {
          command: 'Restore Secret',
          description: 'Restore secret to key vault',
          usage: 'Secret restore',
          example: `az keyvault secret restore --vault-name myKeyVault --file backup.txt`,
        },
        {
          command: 'List Key Vault Keys',
          description: 'List keys in key vault',
          usage: 'Key management',
          example: `az keyvault key list --vault-name myKeyVault`,
        },
        {
          command: 'Show Key Details',
          description: 'Get details for specific key',
          usage: 'Key management',
          example: `az keyvault key show --vault-name myKeyVault --name myKey`,
        },
        {
          command: 'Create Key',
          description: 'Create new key in key vault',
          usage: 'Key management',
          example: `az keyvault key create --vault-name myKeyVault --name myKey --protection software --ops encrypt decrypt`,
        },
        {
          command: 'Delete Key',
          description: 'Delete key from key vault',
          usage: 'Key management',
          example: `az keyvault key delete --vault-name myKeyVault --name myKey`,
        },
        {
          command: 'Encrypt Data with Key',
          description: 'Encrypt data using key vault key',
          usage: 'Key operations',
          example: `az keyvault key encrypt --vault-name myKeyVault --name myKey --algorithm RSA-OAEP-256 --plaintext "Hello World"`,
        },
        {
          command: 'Decrypt Data with Key',
          description: 'Decrypt data using key vault key',
          usage: 'Key operations',
          example: `az keyvault key decrypt --vault-name myKeyVault --name myKey --algorithm RSA-OAEP-256 --ciphertext "encrypted-data"`,
        },
        {
          command: 'List Key Vault Certificates',
          description: 'List certificates in key vault',
          usage: 'Certificate management',
          example: `az keyvault certificate list --vault-name myKeyVault`,
        },
        {
          command: 'Show Certificate Details',
          description: 'Get details for specific certificate',
          usage: 'Certificate management',
          example: `az keyvault certificate show --vault-name myKeyVault --name myCertificate`,
        },
        {
          command: 'Create Certificate',
          description: 'Create new certificate in key vault',
          usage: 'Certificate management',
          example: `az keyvault certificate create --vault-name myKeyVault --name myCertificate --policy @policy.json`,
        },
        {
          command: 'Delete Certificate',
          description: 'Delete certificate from key vault',
          usage: 'Certificate management',
          example: `az keyvault certificate delete --vault-name myKeyVault --name myCertificate`,
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Advanced Services - Azure Container Registry (ACR)',
      commands: [
        {
          command: 'List Container Registries',
          description: 'List all Azure Container Registries',
          usage: 'ACR enumeration',
          example: `az acr list`,
        },
        {
          command: 'Show ACR Details',
          description: 'Get details for specific container registry',
          usage: 'ACR management',
          example: `az acr show --name myACR --resource-group myGroup`,
        },
        {
          command: 'Create Container Registry',
          description: 'Create new Azure Container Registry',
          usage: 'ACR creation',
          example: `az acr create --resource-group myGroup --name myACR --sku Basic`,
        },
        {
          command: 'Delete Container Registry',
          description: 'Delete Azure Container Registry',
          usage: 'ACR management',
          example: `az acr delete --name myACR --resource-group myGroup`,
        },
        {
          command: 'Update ACR SKU',
          description: 'Update container registry SKU',
          usage: 'ACR management',
          example: `az acr update --name myACR --resource-group myGroup --sku Standard`,
        },
        {
          command: 'Get ACR Login Server',
          description: 'Get login server for container registry',
          usage: 'ACR access',
          example: `az acr show --name myACR --resource-group myGroup --query loginServer`,
        },
        {
          command: 'List ACR Repositories',
          description: 'List repositories in container registry',
          usage: 'Repository management',
          example: `az acr repository list --name myACR`,
        },
        {
          command: 'Show Repository Details',
          description: 'Get details for specific repository',
          usage: 'Repository management',
          example: `az acr repository show --name myACR --repository myapp`,
        },
        {
          command: 'Delete Repository',
          description: 'Delete repository from container registry',
          usage: 'Repository management',
          example: `az acr repository delete --name myACR --repository myapp`,
        },
        {
          command: 'Show Repository Tags',
          description: 'List tags for repository',
          usage: 'Image management',
          example: `az acr repository show-tags --name myACR --repository myapp`,
        },
        {
          command: 'Show Repository Manifests',
          description: 'List manifests for repository',
          usage: 'Image management',
          example: `az acr repository show-manifests --name myACR --repository myapp`,
        },
        {
          command: 'Delete Image Tag',
          description: 'Delete specific image tag',
          usage: 'Image management',
          example: `az acr image delete --name myACR --repository myapp --tag latest`,
        },
        {
          command: 'Build and Push Image',
          description: 'Build and push Docker image to ACR',
          usage: 'Image operations',
          example: `az acr build --registry myACR --image myapp:latest .`,
        },
        {
          command: 'Build with Custom Dockerfile',
          description: 'Build image using custom Dockerfile',
          usage: 'Image operations',
          example: `az acr build --registry myACR --image myapp:latest --file Dockerfile .`,
        },
        {
          command: 'Build with Cloud Native Buildpacks',
          description: 'Build image using Cloud Native Buildpacks',
          usage: 'Image operations',
          example: `az acr pack build --registry myACR --image myapp:latest --builder heroku`,
        },
        {
          command: 'Import Image from ACR',
          description: 'Import image from another container registry',
          usage: 'Image import',
          example: `az acr import --source myregistry.azurecr.io/myapp:latest --name myACR --image myapp:imported`,
        },
        {
          command: 'Import Image from Docker Hub',
          description: 'Import image from Docker Hub',
          usage: 'Image import',
          example: `az acr import --source docker.io/library/nginx:latest --name myACR --image nginx:latest`,
        },
        {
          command: 'List ACR Tasks',
          description: 'List ACR build tasks',
          usage: 'ACR tasks',
          example: `az acr task list --registry myACR`,
        },
        {
          command: 'Create ACR Task',
          description: 'Create automated build task',
          usage: 'ACR tasks',
          example: `az acr task create \\
    --registry myACR \\
    --name myTask \\
    --image myapp:{{.Run.ID}} \\
    --cmd Dockerfile \\
    --context https://github.com/user/repo.git#main`,
        },
        {
          command: 'Run ACR Task',
          description: 'Execute ACR build task',
          usage: 'ACR tasks',
          example: `az acr task run --registry myACR --name myTask`,
        },
        {
          command: 'List ACR Task Runs',
          description: 'List task execution history',
          usage: 'ACR tasks',
          example: `az acr task list-runs --registry myACR`,
        },
        {
          command: 'Login to ACR',
          description: 'Login to Azure Container Registry',
          usage: 'ACR access',
          example: `az acr login --name myACR`,
        },
      ],
    },
    {
      title: 'Advanced Services - Azure DevTest Labs',
      commands: [
        {
          command: 'List DevTest Labs',
          description: 'List all DevTest Labs in subscription',
          usage: 'Lab enumeration',
          example: `az lab list`,
        },
        {
          command: 'Show Lab Details',
          description: 'Get details for specific DevTest Lab',
          usage: 'Lab management',
          example: `az lab show --name myLab --resource-group myGroup`,
        },
        {
          command: 'Create DevTest Lab',
          description: 'Create new DevTest Lab',
          usage: 'Lab creation',
          example: `az lab create --name myLab --resource-group myGroup --location eastus`,
        },
        {
          command: 'Delete DevTest Lab',
          description: 'Delete DevTest Lab',
          usage: 'Lab management',
          example: `az lab delete --name myLab --resource-group myGroup`,
        },
        {
          command: 'Claim Any Available VM',
          description: 'Claim any available VM in lab',
          usage: 'Lab VM management',
          example: `az lab claim-any --lab-name myLab --resource-group myGroup`,
        },
        {
          command: 'List Lab VMs',
          description: 'List virtual machines in DevTest Lab',
          usage: 'Lab VM enumeration',
          example: `az lab vm list --lab-name myLab --resource-group myGroup`,
        },
        {
          command: 'Show Lab VM Details',
          description: 'Get details for specific lab VM',
          usage: 'Lab VM management',
          example: `az lab vm show --lab-name myLab --name myVM --resource-group myGroup`,
        },
        {
          command: 'Create Lab VM',
          description: 'Create virtual machine in DevTest Lab',
          usage: 'Lab VM creation',
          example: `az lab vm create --lab-name myLab --name myVM --resource-group myGroup --image "Windows 10 Pro" --image-type gallery --size Standard_D2_v3`,
        },
        {
          command: 'Delete Lab VM',
          description: 'Delete virtual machine from DevTest Lab',
          usage: 'Lab VM management',
          example: `az lab vm delete --lab-name myLab --name myVM --resource-group myGroup`,
        },
        {
          command: 'Start Lab VM',
          description: 'Start virtual machine in DevTest Lab',
          usage: 'Lab VM operations',
          example: `az lab vm start --lab-name myLab --name myVM --resource-group myGroup`,
        },
        {
          command: 'Stop Lab VM',
          description: 'Stop virtual machine in DevTest Lab',
          usage: 'Lab VM operations',
          example: `az lab vm stop --lab-name myLab --name myVM --resource-group myGroup`,
        },
        {
          command: 'Apply Artifacts to Lab VM',
          description: 'Apply artifacts to lab virtual machine',
          usage: 'Lab VM configuration',
          example: `az lab vm apply-artifacts --lab-name myLab --name myVM --resource-group myGroup --artifacts @artifacts.json`,
        },
        {
          command: 'List Lab Environments',
          description: 'List environments in DevTest Lab',
          usage: 'Environment management',
          example: `az lab environment list --lab-name myLab --resource-group myGroup`,
        },
        {
          command: 'Show Lab Environment Details',
          description: 'Get details for specific lab environment',
          usage: 'Environment management',
          example: `az lab environment show --lab-name myLab --name myEnvironment --resource-group myGroup`,
        },
        {
          command: 'Create Lab Environment',
          description: 'Create environment in DevTest Lab',
          usage: 'Environment creation',
          example: `az lab environment create --lab-name myLab --name myEnvironment --resource-group myGroup --template-file template.json`,
        },
        {
          command: 'Delete Lab Environment',
          description: 'Delete environment from DevTest Lab',
          usage: 'Environment management',
          example: `az lab environment delete --lab-name myLab --name myEnvironment --resource-group myGroup`,
        },
        {
          command: 'List Lab Custom Images',
          description: 'List custom images in DevTest Lab',
          usage: 'Image management',
          example: `az lab custom-image list --lab-name myLab --resource-group myGroup`,
        },
        {
          command: 'Show Custom Image Details',
          description: 'Get details for custom image',
          usage: 'Image management',
          example: `az lab custom-image show --lab-name myLab --name myImage --resource-group myGroup`,
        },
        {
          command: 'Create Lab Custom Image',
          description: 'Create custom image in DevTest Lab',
          usage: 'Image creation',
          example: `az lab custom-image create --lab-name myLab --name myImage --resource-group myGroup --source-vm-id /subscriptions/sub-id/resourceGroups/group-name/providers/Microsoft.Compute/virtualMachines/vm-name`,
        },
        {
          command: 'Delete Lab Custom Image',
          description: 'Delete custom image from DevTest Lab',
          usage: 'Image management',
          example: `az lab custom-image delete --lab-name myLab --name myImage --resource-group myGroup`,
        },
      ],
    },
    {
      title: 'Advanced Services - Azure Service Bus',
      commands: [
        {
          command: 'List Service Bus Namespaces',
          description: 'List all Service Bus namespaces',
          usage: 'Namespace enumeration',
          example: `az servicebus namespace list`,
        },
        {
          command: 'Show Namespace Details',
          description: 'Get details for Service Bus namespace',
          usage: 'Namespace management',
          example: `az servicebus namespace show --name myNamespace --resource-group myGroup`,
        },
        {
          command: 'Create Service Bus Namespace',
          description: 'Create new Service Bus namespace',
          usage: 'Namespace creation',
          example: `az servicebus namespace create --resource-group myGroup --name myNamespace --location eastus --sku Standard`,
        },
        {
          command: 'Delete Service Bus Namespace',
          description: 'Delete Service Bus namespace',
          usage: 'Namespace management',
          example: `az servicebus namespace delete --name myNamespace --resource-group myGroup`,
        },
        {
          command: 'Check Namespace Exists',
          description: 'Check if Service Bus namespace exists',
          usage: 'Namespace validation',
          example: `az servicebus namespace exists --name myNamespace`,
        },
        {
          command: 'List Service Bus Queues',
          description: 'List queues in Service Bus namespace',
          usage: 'Queue enumeration',
          example: `az servicebus queue list --namespace-name myNamespace --resource-group myGroup`,
        },
        {
          command: 'Show Queue Details',
          description: 'Get details for specific Service Bus queue',
          usage: 'Queue management',
          example: `az servicebus queue show --namespace-name myNamespace --name myQueue --resource-group myGroup`,
        },
        {
          command: 'Create Service Bus Queue',
          description: 'Create new queue in Service Bus namespace',
          usage: 'Queue creation',
          example: `az servicebus queue create --namespace-name myNamespace --name myQueue --resource-group myGroup`,
        },
        {
          command: 'Delete Service Bus Queue',
          description: 'Delete queue from Service Bus namespace',
          usage: 'Queue management',
          example: `az servicebus queue delete --namespace-name myNamespace --name myQueue --resource-group myGroup`,
        },
        {
          command: 'Send Message to Queue',
          description: 'Send message to Service Bus queue',
          usage: 'Queue operations',
          example: `az servicebus queue send --namespace-name myNamespace --name myQueue --message "Hello World"`,
        },
        {
          command: 'Receive Message from Queue',
          description: 'Receive message from Service Bus queue',
          usage: 'Queue operations',
          example: `az servicebus queue receive --namespace-name myNamespace --name myQueue`,
        },
        {
          command: 'Purge Queue Messages',
          description: 'Purge all messages from queue',
          usage: 'Queue operations',
          example: `az servicebus queue purge --namespace-name myNamespace --name myQueue`,
        },
        {
          command: 'List Service Bus Topics',
          description: 'List topics in Service Bus namespace',
          usage: 'Topic enumeration',
          example: `az servicebus topic list --namespace-name myNamespace --resource-group myGroup`,
        },
        {
          command: 'Show Topic Details',
          description: 'Get details for specific Service Bus topic',
          usage: 'Topic management',
          example: `az servicebus topic show --namespace-name myNamespace --name myTopic --resource-group myGroup`,
        },
        {
          command: 'Create Service Bus Topic',
          description: 'Create new topic in Service Bus namespace',
          usage: 'Topic creation',
          example: `az servicebus topic create --namespace-name myNamespace --name myTopic --resource-group myGroup`,
        },
        {
          command: 'Delete Service Bus Topic',
          description: 'Delete topic from Service Bus namespace',
          usage: 'Topic management',
          example: `az servicebus topic delete --namespace-name myNamespace --name myTopic --resource-group myGroup`,
        },
        {
          command: 'List Topic Subscriptions',
          description: 'List subscriptions for Service Bus topic',
          usage: 'Subscription management',
          example: `az servicebus topic subscription list --namespace-name myNamespace --topic-name myTopic --resource-group myGroup`,
        },
        {
          command: 'Create Topic Subscription',
          description: 'Create subscription for Service Bus topic',
          usage: 'Subscription creation',
          example: `az servicebus topic subscription create --namespace-name myNamespace --topic-name myTopic --name mySubscription --resource-group myGroup`,
        },
        {
          command: 'Delete Topic Subscription',
          description: 'Delete subscription from Service Bus topic',
          usage: 'Subscription management',
          example: `az servicebus topic subscription delete --namespace-name myNamespace --topic-name myTopic --name mySubscription --resource-group myGroup`,
        },
        {
          command: 'Send Message to Topic',
          description: 'Send message to Service Bus topic',
          usage: 'Topic operations',
          example: `az servicebus topic send --namespace-name myNamespace --name myTopic --message "Hello World"`,
        },
        {
          command: 'Receive Message from Subscription',
          description: 'Receive message from topic subscription',
          usage: 'Subscription operations',
          example: `az servicebus topic subscription receive --namespace-name myNamespace --topic-name myTopic --name mySubscription`,
        },
      ],
    },
    {
      title: 'Advanced Services - Azure Cosmos DB',
      commands: [
        {
          command: 'List Cosmos DB Accounts',
          description: 'List all Cosmos DB accounts in subscription',
          usage: 'Cosmos DB enumeration',
          example: `az cosmosdb list`,
        },
        {
          command: 'Show Cosmos DB Account Details',
          description: 'Get details for specific Cosmos DB account',
          usage: 'Cosmos DB management',
          example: `az cosmosdb show --name myCosmosDB --resource-group myGroup`,
        },
        {
          command: 'Create Cosmos DB Account',
          description: 'Create new Azure Cosmos DB account',
          usage: 'Cosmos DB creation',
          example: `az cosmosdb create --name myCosmosDB --resource-group myGroup --locations regionName=eastus failoverPriority=0 isZoneRedundant=False`,
        },
        {
          command: 'Delete Cosmos DB Account',
          description: 'Delete Cosmos DB account',
          usage: 'Cosmos DB management',
          example: `az cosmosdb delete --name myCosmosDB --resource-group myGroup`,
        },
        {
          command: 'Update Cosmos DB Account',
          description: 'Update Cosmos DB account settings',
          usage: 'Cosmos DB management',
          example: `az cosmosdb update --name myCosmosDB --resource-group myGroup --default-consistency-level Session`,
        },
        {
          command: 'List Cosmos DB Keys',
          description: 'List access keys for Cosmos DB account',
          usage: 'Cosmos DB security',
          example: `az cosmosdb keys list --name myCosmosDB --resource-group myGroup --type keys`,
        },
        {
          command: 'List SQL Databases',
          description: 'List SQL API databases in Cosmos DB',
          usage: 'Database enumeration',
          example: `az cosmosdb sql database list --account-name myCosmosDB --resource-group myGroup`,
        },
        {
          command: 'Show SQL Database Details',
          description: 'Get details for specific SQL database',
          usage: 'Database management',
          example: `az cosmosdb sql database show --account-name myCosmosDB --resource-group myGroup --name myDatabase`,
        },
        {
          command: 'Create SQL Database',
          description: 'Create new SQL API database',
          usage: 'Database creation',
          example: `az cosmosdb sql database create --account-name myCosmosDB --resource-group myGroup --name myDatabase`,
        },
        {
          command: 'Delete SQL Database',
          description: 'Delete SQL API database',
          usage: 'Database management',
          example: `az cosmosdb sql database delete --account-name myCosmosDB --resource-group myGroup --name myDatabase`,
        },
        {
          command: 'List SQL Containers',
          description: 'List SQL API containers in database',
          usage: 'Container enumeration',
          example: `az cosmosdb sql container list --account-name myCosmosDB --resource-group myGroup --database-name myDatabase`,
        },
        {
          command: 'Show SQL Container Details',
          description: 'Get details for specific SQL container',
          usage: 'Container management',
          example: `az cosmosdb sql container show --account-name myCosmosDB --resource-group myGroup --database-name myDatabase --name myContainer`,
        },
        {
          command: 'Create SQL Container',
          description: 'Create new SQL API container',
          usage: 'Container creation',
          example: `az cosmosdb sql container create --account-name myCosmosDB --resource-group myGroup --database-name myDatabase --name myContainer --partition-key-path "/id"`,
        },
        {
          command: 'Delete SQL Container',
          description: 'Delete SQL API container',
          usage: 'Container management',
          example: `az cosmosdb sql container delete --account-name myCosmosDB --resource-group myGroup --database-name myDatabase --name myContainer`,
        },
        {
          command: 'List MongoDB Databases',
          description: 'List MongoDB API databases',
          usage: 'MongoDB enumeration',
          example: `az cosmosdb mongodb database list --account-name myCosmosDB --resource-group myGroup`,
        },
        {
          command: 'Create MongoDB Database',
          description: 'Create new MongoDB API database',
          usage: 'MongoDB creation',
          example: `az cosmosdb mongodb database create --account-name myCosmosDB --resource-group myGroup --name myMongoDB`,
        },
        {
          command: 'List MongoDB Collections',
          description: 'List MongoDB collections',
          usage: 'MongoDB management',
          example: `az cosmosdb mongodb collection list --account-name myCosmosDB --resource-group myGroup --database-name myMongoDB`,
        },
        {
          command: 'Create MongoDB Collection',
          description: 'Create new MongoDB collection',
          usage: 'MongoDB creation',
          example: `az cosmosdb mongodb collection create --account-name myCosmosDB --resource-group myGroup --database-name myMongoDB --name myCollection --shard-key "_id"`,
        },
        {
          command: 'Regenerate Cosmos DB Key',
          description: 'Regenerate access key for Cosmos DB',
          usage: 'Cosmos DB security',
          example: `az cosmosdb keys regenerate --name myCosmosDB --resource-group myGroup --key-kind primary`,
        },
        {
          command: 'Enable Cosmos DB SQL Throughput',
          description: 'Set throughput for SQL database or container',
          usage: 'Performance tuning',
          example: `az cosmosdb sql container throughput update --account-name myCosmosDB --resource-group myGroup --database-name myDatabase --name myContainer --throughput 400`,
        },
        {
          command: 'Show Cosmos DB SQL Throughput',
          description: 'Get throughput settings for SQL resources',
          usage: 'Performance monitoring',
          example: `az cosmosdb sql container throughput show --account-name myCosmosDB --resource-group myGroup --database-name myDatabase --name myContainer`,
        },
      ],
    },
    // EXPERT LEVEL
    {
      title: 'Expert Level - Advanced CLI Techniques',
      commands: [
        {
          command: 'JMESPath Filter by Location',
          description: 'Filter Azure resources by location using JMESPath',
          usage: 'Advanced querying',
          example: `az vm list --query "[?location=='eastus']"`,
        },
        {
          command: 'JMESPath Filter and Select Fields',
          description: 'Filter resources and select specific fields',
          usage: 'Advanced querying',
          example: `az vm list --query "[?contains(name, 'prod')].{name:name,location:location}"`,
        },
        {
          command: 'JMESPath Sort by Name',
          description: 'Sort resource list by name using JMESPath',
          usage: 'Advanced querying',
          example: `az vm list --query "sort_by([], &name)"`,
        },
        {
          command: 'JMESPath Sort by Date',
          description: 'Sort resources by creation date descending',
          usage: 'Advanced querying',
          example: `az vm list --query "reverse(sort_by([], &creationDate))"`,
        },
        {
          command: 'Limit Query Results',
          description: 'Limit number of results returned',
          usage: 'Pagination control',
          example: `az vm list --top 50`,
        },
        {
          command: 'Get All Results',
          description: 'Get all results without pagination limits',
          usage: 'Pagination control',
          example: `az vm list --all`,
        },
        {
          command: 'Output in Table Format',
          description: 'Display command output in table format',
          usage: 'Output formatting',
          example: `az group list --output table`,
        },
        {
          command: 'Output in TSV Format',
          description: 'Display output in TSV format for scripting',
          usage: 'Output formatting',
          example: `az group list --output tsv`,
        },
        {
          command: 'Pipe to jq for Processing',
          description: 'Pipe JSON output to jq for advanced processing',
          usage: 'Output processing',
          example: `az group list --output json | jq '.[].name'`,
        },
        {
          command: 'Process Each Result with xargs',
          description: 'Process each query result with xargs',
          usage: 'Batch processing',
          example: `az group list --query "[].name" --output tsv | xargs -I {} az group show --name {}`,
        },
        {
          command: 'Parallel Operations with Background Jobs',
          description: 'Execute commands in parallel across resource groups',
          usage: 'Parallel execution',
          example: `for rg in $(az group list --query "[].name" --output tsv); do
    az vm list --resource-group $rg &
done
wait  # Wait for all background jobs`,
        },
        {
          command: 'Batch Operations with --ids',
          description: 'Perform batch operations using resource IDs',
          usage: 'Batch operations',
          example: `az vm list --query "[].id" --output tsv | az vm stop --ids @-`,
        },
        {
          command: 'Start VMs in Specific Location',
          description: 'Start all VMs in specific location',
          usage: 'Batch operations',
          example: `az vm list --query "[?location=='eastus'].id" --output tsv | az vm start --ids @-`,
        },
        {
          command: 'Error Handling with Retry',
          description: 'Implement error handling and retry logic',
          usage: 'Error handling',
          example: `az vm create --resource-group myGroup --name myVM --image UbuntuLTS --no-wait || {
    echo "VM creation failed, retrying..."
    az vm create --resource-group myGroup --name myVM --image UbuntuLTS
}`,
        },
        {
          command: 'Set Default Resource Group',
          description: 'Configure default resource group for CLI',
          usage: 'Configuration profiles',
          example: `az config set defaults.group=myResourceGroup`,
        },
        {
          command: 'Set Default Location',
          description: 'Configure default location for CLI',
          usage: 'Configuration profiles',
          example: `az config set defaults.location=eastus`,
        },
        {
          command: 'Set Default Output Format',
          description: 'Configure default output format',
          usage: 'Configuration profiles',
          example: `az config set defaults.output=table`,
        },
        {
          command: 'Show Only Errors',
          description: 'Configure CLI to show only errors',
          usage: 'Configuration profiles',
          example: `az config set core.only_show_errors=true`,
        },
        {
          command: 'Enable Dynamic Extension Install',
          description: 'Enable automatic extension installation',
          usage: 'Configuration profiles',
          example: `az config set extension.use_dynamic_install=yes_prompt`,
        },
        {
          command: 'Set Environment Variables',
          description: 'Configure Azure CLI with environment variables',
          usage: 'Environment setup',
          example: `export AZURE_CLI_DISABLE_CONFIRMATION=yes
export AZURE_DEFAULT_LOCATION=eastus
export AZURE_DEFAULT_GROUP=myResourceGroup
export AZURE_CONFIG_DIR=/custom/path`,
        },
        {
          command: 'Custom Output Format Query',
          description: 'Create custom formatted output with JMESPath',
          usage: 'Custom formatting',
          example: `az vm list --query "[].{Name:name, Location:location, Size:hardwareProfile.vmSize}" --output table`,
        },
        {
          command: 'Generate CLI Skeleton',
          description: 'Generate JSON skeleton for commands',
          usage: 'Command scaffolding',
          example: `az vm create --generate-cli-skeleton`,
        },
        {
          command: 'Use CLI Input JSON',
          description: 'Use JSON file for CLI command input',
          usage: 'File-based input',
          example: `az vm create --resource-group myGroup --name myVM --cli-input-json file://vm-config.json`,
        },
        {
          command: 'Configure Retry Mode',
          description: 'Set CLI retry behavior for network operations',
          usage: 'Error handling',
          example: `az config set core.retry_mode=standard`,
        },
        {
          command: 'Set Maximum Attempts',
          description: 'Configure maximum retry attempts',
          usage: 'Error handling',
          example: `az config set core.max_attempts=5`,
        },
        {
          command: 'Enable Debug Logging',
          description: 'Enable debug output for troubleshooting',
          usage: 'Debugging',
          example: `az vm list --debug`,
        },
        {
          command: 'Set Request Timeout',
          description: 'Configure timeout for HTTP requests',
          usage: 'Performance tuning',
          example: `az config set core.request_timeout=30`,
        },
      ],
    },
    {
      title: 'Expert Level - Security, Compliance, and Governance',
      commands: [
        {
          command: 'List Security Center Pricing',
          description: 'List Azure Security Center pricing tiers',
          usage: 'Security configuration',
          example: `az security pricing list`,
        },
        {
          command: 'Set Security Center Pricing',
          description: 'Configure Security Center pricing for resource type',
          usage: 'Security configuration',
          example: `az security pricing create --name VirtualMachines --resource-group myGroup --pricing-tier Standard`,
        },
        {
          command: 'List Security Solutions',
          description: 'List security solutions in resource group',
          usage: 'Security management',
          example: `az security security-solutions list --resource-group myGroup`,
        },
        {
          command: 'Add Security Solution',
          description: 'Add security solution to virtual machine',
          usage: 'Security management',
          example: `az security security-solutions create --resource-group myGroup --name mySolution --virtual-machine myVM`,
        },
        {
          command: 'List Security Assessments',
          description: 'List security assessments',
          usage: 'Security assessment',
          example: `az security assessment list`,
        },
        {
          command: 'Show Security Assessment',
          description: 'Get details for security assessment',
          usage: 'Security assessment',
          example: `az security assessment show --name assessment-name --resource-group myGroup`,
        },
        {
          command: 'Create Security Assessment',
          description: 'Create security assessment',
          usage: 'Security assessment',
          example: `az security assessment create --name myAssessment --resource-group myGroup --status Healthy`,
        },
        {
          command: 'List Security Alerts',
          description: 'List security alerts',
          usage: 'Security monitoring',
          example: `az security alert list`,
        },
        {
          command: 'Show Security Alert',
          description: 'Get details for security alert',
          usage: 'Security monitoring',
          example: `az security alert show --name alert-name --resource-group myGroup`,
        },
        {
          command: 'Update Security Alert Status',
          description: 'Update status of security alert',
          usage: 'Security monitoring',
          example: `az security alert update --name alert-name --resource-group myGroup --status Dismissed`,
        },
        {
          command: 'List Policy Definitions',
          description: 'List Azure Policy definitions',
          usage: 'Policy management',
          example: `az policy definition list`,
        },
        {
          command: 'Show Policy Definition',
          description: 'Get details for policy definition',
          usage: 'Policy management',
          example: `az policy definition show --name policy-name`,
        },
        {
          command: 'Create Policy Definition',
          description: 'Create new Azure Policy definition',
          usage: 'Policy creation',
          example: `az policy definition create --name myPolicy --display-name "My Policy" --rules @policy.json --params @params.json`,
        },
        {
          command: 'List Policy Assignments',
          description: 'List Azure Policy assignments',
          usage: 'Policy management',
          example: `az policy assignment list`,
        },
        {
          command: 'Create Policy Assignment',
          description: 'Assign policy to scope',
          usage: 'Policy assignment',
          example: `az policy assignment create --name myAssignment --policy policy-definition-id --scope /subscriptions/sub-id`,
        },
        {
          command: 'List Policy States',
          description: 'List policy compliance states',
          usage: 'Policy compliance',
          example: `az policy state list --resource /subscriptions/sub-id/resourceGroups/group-name/providers/Microsoft.Compute/virtualMachines/vm-name`,
        },
        {
          command: 'List Blueprints',
          description: 'List Azure Blueprints',
          usage: 'Blueprint management',
          example: `az blueprint list`,
        },
        {
          command: 'Show Blueprint',
          description: 'Get details for Azure Blueprint',
          usage: 'Blueprint management',
          example: `az blueprint show --name myBlueprint`,
        },
        {
          command: 'Create Blueprint',
          description: 'Create new Azure Blueprint',
          usage: 'Blueprint creation',
          example: `az blueprint create --name myBlueprint --description "My Blueprint"`,
        },
        {
          command: 'Create Blueprint Version',
          description: 'Create version of Azure Blueprint',
          usage: 'Blueprint management',
          example: `az blueprint version create --blueprint-name myBlueprint --version "1.0"`,
        },
        {
          command: 'Assign Blueprint',
          description: 'Assign Azure Blueprint to subscription',
          usage: 'Blueprint assignment',
          example: `az blueprint assignment create --blueprint-name myBlueprint --assignment-name myAssignment`,
        },
        {
          command: 'Enable Azure AD Privileged Identity Management',
          description: 'Enable PIM for Azure AD roles',
          usage: 'Identity management',
          example: `az role assignment create --assignee user@example.com --role "Privileged Role Administrator"`,
        },
        {
          command: 'List Azure AD Role Assignments',
          description: 'List Azure AD role assignments',
          usage: 'Identity management',
          example: `az ad sp list --show-mine`,
        },
        {
          command: 'Create Custom Role',
          description: 'Create custom Azure role',
          usage: 'Role management',
          example: `az role definition create --role-name myCustomRole --description "Custom role for specific tasks" --data @role-definition.json`,
        },
        {
          command: 'Assign Custom Role',
          description: 'Assign custom role to user/service principal',
          usage: 'Role management',
          example: `az role assignment create --assignee user@example.com --role myCustomRole --scope /subscriptions/sub-id/resourceGroups/group-name`,
        },
      ],
    },
    {
      title: 'Expert Level - Cost Management and Optimization',
      commands: [
        {
          command: 'Query Cost Management Data',
          description: 'Query cost and usage data with aggregation',
          usage: 'Cost analysis',
          example: `az costmanagement query --type Usage --dataset "Aggregation:TotalCost=sum{Cost}" --timeframe MonthToDate --dimension ResourceGroup,ResourceType`,
        },
        {
          command: 'List Cost Exports',
          description: 'List cost export configurations',
          usage: 'Cost management',
          example: `az costmanagement export list --scope /subscriptions/sub-id`,
        },
        {
          command: 'Create Cost Export',
          description: 'Create cost export to storage account',
          usage: 'Cost management',
          example: `az costmanagement export create --name myExport --scope /subscriptions/sub-id --dataset "Aggregation:TotalCost=sum{Cost}" --timeframe MonthToDate --storage-account-id /subscriptions/sub-id/resourceGroups/group-name/providers/Microsoft.Storage/storageAccounts/storageaccount`,
        },
        {
          command: 'List Budgets',
          description: 'List budgets in resource group or subscription',
          usage: 'Budget management',
          example: `az consumption budget list --resource-group myGroup`,
        },
        {
          command: 'Create Budget',
          description: 'Create cost budget for resource group',
          usage: 'Budget creation',
          example: `az consumption budget create --resource-group myGroup --name myBudget --amount 1000 --time-grain Monthly --start-date 2023-01-01 --end-date 2023-12-31`,
        },
        {
          command: 'Show Budget Details',
          description: 'Get details for specific budget',
          usage: 'Budget management',
          example: `az consumption budget show --resource-group myGroup --name myBudget`,
        },
        {
          command: 'Delete Budget',
          description: 'Delete cost budget',
          usage: 'Budget management',
          example: `az consumption budget delete --resource-group myGroup --name myBudget`,
        },
        {
          command: 'List Reservations',
          description: 'List Azure reservations',
          usage: 'Reservation management',
          example: `az reservations reservation list`,
        },
        {
          command: 'Show Reservation Details',
          description: 'Get details for specific reservation',
          usage: 'Reservation management',
          example: `az reservations reservation show --reservation-order-id order-id --reservation-id reservation-id`,
        },
        {
          command: 'List Reservation Orders',
          description: 'List reservation orders',
          usage: 'Reservation management',
          example: `az reservations reservation order list`,
        },
        {
          command: 'Show Available Reservations',
          description: 'Show available reservations for purchase',
          usage: 'Reservation planning',
          example: `az reservations catalog show --reserved-resource-type "VirtualMachines" --location eastus`,
        },
        {
          command: 'List Savings Plans',
          description: 'List Azure savings plans',
          usage: 'Savings management',
          example: `az savingsplan list`,
        },
        {
          command: 'Show Savings Plan Details',
          description: 'Get details for specific savings plan',
          usage: 'Savings management',
          example: `az savingsplan show --name mySavingsPlan`,
        },
        {
          command: 'Create Savings Plan',
          description: 'Create new Azure savings plan',
          usage: 'Savings creation',
          example: `az savingsplan create --name mySavingsPlan --resource-group myGroup --savings-plan-type Compute --committed-amount 0.001 --commitment-duration "P3Y" --billing-scope /subscriptions/sub-id`,
        },
        {
          command: 'List Advisor Recommendations',
          description: 'List all Azure Advisor recommendations',
          usage: 'Optimization recommendations',
          example: `az advisor recommendation list`,
        },
        {
          command: 'List Cost Recommendations',
          description: 'List cost optimization recommendations',
          usage: 'Cost optimization',
          example: `az advisor recommendation list --category Cost`,
        },
        {
          command: 'List Performance Recommendations',
          description: 'List performance optimization recommendations',
          usage: 'Performance optimization',
          example: `az advisor recommendation list --category Performance`,
        },
        {
          command: 'List High Availability Recommendations',
          description: 'List high availability recommendations',
          usage: 'Reliability optimization',
          example: `az advisor recommendation list --category HighAvailability`,
        },
        {
          command: 'List Security Recommendations',
          description: 'List security recommendations',
          usage: 'Security optimization',
          example: `az advisor recommendation list --category Security`,
        },
        {
          command: 'Get Cost Forecast',
          description: 'Get cost forecast for specified period',
          usage: 'Cost prediction',
          example: `az costmanagement forecast --timeframe MonthToDate --dataset "Aggregation:TotalCost=sum{Cost}" --timeframe MonthToDate --configuration "columns=[Date,Cost,Currency]"`,
        },
        {
          command: 'Analyze Cost by Dimension',
          description: 'Analyze costs by specific dimensions',
          usage: 'Cost analysis',
          example: `az costmanagement query --type Usage --dataset "Aggregation:TotalCost=sum{Cost}" --timeframe MonthToDate --group-by Type=DIMENSION,Key=ServiceName`,
        },
        {
          command: 'Get Budget Notifications',
          description: 'Get budget alert notifications',
          usage: 'Budget monitoring',
          example: `az monitor metrics alert list --resource-group myGroup --query "[?contains(name, 'budget')]"`,
        },
      ],
    },
    {
      title: 'Expert Level - Multi-Cloud and Hybrid Management',
      commands: [
        {
          command: 'List Connected Kubernetes Clusters',
          description: 'List Kubernetes clusters connected to Azure Arc',
          usage: 'Azure Arc management',
          example: `az connectedk8s list`,
        },
        {
          command: 'Connect Kubernetes Cluster to Azure Arc',
          description: 'Connect on-premises Kubernetes cluster to Azure Arc',
          usage: 'Azure Arc operations',
          example: `az connectedk8s connect --name myCluster --resource-group myGroup`,
        },
        {
          command: 'Show Connected Cluster Details',
          description: 'Get details for Azure Arc connected cluster',
          usage: 'Azure Arc management',
          example: `az connectedk8s show --name myCluster --resource-group myGroup`,
        },
        {
          command: 'Disconnect Kubernetes Cluster from Azure Arc',
          description: 'Disconnect cluster from Azure Arc',
          usage: 'Azure Arc operations',
          example: `az connectedk8s delete --name myCluster --resource-group myGroup`,
        },
        {
          command: 'List Connected Machines',
          description: 'List servers connected to Azure Arc',
          usage: 'Azure Arc for servers',
          example: `az connectedmachine list`,
        },
        {
          command: 'Show Connected Machine Details',
          description: 'Get details for Azure Arc connected machine',
          usage: 'Azure Arc for servers',
          example: `az connectedmachine show --name myMachine --resource-group myGroup`,
        },
        {
          command: 'Connect Machine to Azure Arc',
          description: 'Connect on-premises server to Azure Arc',
          usage: 'Azure Arc for servers',
          example: `az connectedmachine connect --name myMachine --resource-group myGroup`,
        },
        {
          command: 'Disconnect Machine from Azure Arc',
          description: 'Disconnect server from Azure Arc',
          usage: 'Azure Arc for servers',
          example: `az connectedmachine delete --name myMachine --resource-group myGroup`,
        },
        {
          command: 'List Arc-Enabled SQL Servers',
          description: 'List SQL servers managed by Azure Arc',
          usage: 'Azure Arc for SQL',
          example: `az arc sql server list`,
        },
        {
          command: 'Create Arc-Enabled SQL Server',
          description: 'Enable Azure Arc for SQL Server',
          usage: 'Azure Arc for SQL',
          example: `az arc sql server create --name mySQLServer --resource-group myGroup --location eastus`,
        },
        {
          command: 'Show Arc-Enabled SQL Server',
          description: 'Get details for Arc-enabled SQL server',
          usage: 'Azure Arc for SQL',
          example: `az arc sql server show --name mySQLServer --resource-group myGroup`,
        },
        {
          command: 'List Arc-Enabled PostgreSQL Servers',
          description: 'List PostgreSQL servers managed by Azure Arc',
          usage: 'Azure Arc for PostgreSQL',
          example: `az arc postgres server list`,
        },
        {
          command: 'Create Arc-Enabled PostgreSQL Server',
          description: 'Enable Azure Arc for PostgreSQL server',
          usage: 'Azure Arc for PostgreSQL',
          example: `az arc postgres server create --name myPostgresServer --resource-group myGroup --location eastus`,
        },
        {
          command: 'Register Azure Stack Cloud',
          description: 'Register Azure Stack Hub as custom cloud',
          usage: 'Azure Stack management',
          example: `az cloud register --name AzureStack --endpoint https://management.local.azurestack.external`,
        },
        {
          command: 'Set Azure Stack as Active Cloud',
          description: 'Switch to Azure Stack environment',
          usage: 'Azure Stack management',
          example: `az cloud set --name AzureStack`,
        },
        {
          command: 'Update Azure Stack Profile',
          description: 'Update Azure Stack cloud profile',
          usage: 'Azure Stack management',
          example: `az cloud update --name AzureStack --set profile=2019-03-01-hybrid`,
        },
        {
          command: 'List Azure Stack Edge Devices',
          description: 'List Azure Stack Edge devices',
          usage: 'Edge device management',
          example: `az databoxedge device list`,
        },
        {
          command: 'Show Azure Stack Edge Device',
          description: 'Get details for Azure Stack Edge device',
          usage: 'Edge device management',
          example: `az databoxedge device show --name myDevice --resource-group myGroup`,
        },
        {
          command: 'Create Azure Stack Edge Device',
          description: 'Create new Azure Stack Edge device',
          usage: 'Edge device creation',
          example: `az databoxedge device create --name myDevice --resource-group myGroup --location eastus --sku Edge`,
        },
        {
          command: 'Multi-Cloud Resource Query',
          description: 'Query resources across multiple clouds using Azure Resource Graph',
          usage: 'Multi-cloud management',
          example: `az graph query -q "Resources | where type =~ 'Microsoft.Compute/virtualMachines' or type =~ 'Microsoft.Storage/storageAccounts'"`,
        },
        {
          command: 'Cross-Subscription Resource Query',
          description: 'Query resources across multiple subscriptions',
          usage: 'Multi-subscription management',
          example: `az graph query -q "Resources | where subscriptionId in ('sub1', 'sub2') | summarize count() by subscriptionId, type"`,
        },
        {
          command: 'Hybrid Network Configuration',
          description: 'Configure hybrid network connections',
          usage: 'Hybrid networking',
          example: `az network vpn-connection create --resource-group myGroup --name myConnection --vnet-gateway1 myGateway --local-gateway2 myLocalGateway --shared-key "mySharedKey"`,
        },
        {
          command: 'ExpressRoute Circuit Management',
          description: 'Manage ExpressRoute circuits for hybrid connectivity',
          usage: 'Hybrid networking',
          example: `az network express-route create --resource-group myGroup --name myCircuit --peering-location SiliconValley --bandwidth 200 --sku Standard_MeteredData --provider "Equinix" --location eastus`,
        },
        {
          command: 'Azure Monitor for Hybrid Resources',
          description: 'Configure monitoring for hybrid resources',
          usage: 'Hybrid monitoring',
          example: `az monitor log-analytics workspace linked-service create --name myLinkedService --resource-group myGroup --workspace-name myWorkspace --write-access-resource-id /subscriptions/sub-id/resourceGroups/group-name/providers/Microsoft.Automation/automationAccounts/accountName`,
        },
        {
          command: 'Hybrid Identity Management',
          description: 'Manage hybrid identity with Azure AD Connect',
          usage: 'Identity management',
          example: `az ad ds create --resource-group myGroup --name myDomainService --location eastus --domain-name example.com --replica-sets "eastus"`,
        },
      ],
    },
  ],
};
