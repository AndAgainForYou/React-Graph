import Subnet from './jsons/subnets.json';
import Ec from './jsons/EC2s.json';
import SecurityGroups from './jsons/security-groups.json';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    name: 'Vps',
	children: [{
		//Data For Subnets
		name: Subnet.Subnets[0].SubnetId,
		Owner: Subnet.Subnets[0].OwnerId,
		VpcId: Subnet.Subnets[0].VpcId,
		State: Subnet.Subnets[0].State,
		CidrBlock: Subnet.Subnets[0].CidrBlock,
		SubnetId: Subnet.Subnets[0].SubnetId,
		AvailabilityZone: Subnet.Subnets[0].AvailabilityZone,
		AvailabilityZoneId: Subnet.Subnets[0].AvailabilityZoneId,
		//Data For EC
		children: [{
			name: 'NO DATA',
			children: []
		}, {
			name: Ec.Reservations[0].Instances[0].InstanceId,
			instanceId: Ec.Reservations[0].Instances[0].InstanceId,
			publicIpAddress: Ec.Reservations[0].Instances[0].PublicIpAddress,
			instanceType: Ec.Reservations[0].Instances[0].InstanceType,
			monitoring: Ec.Reservations[0].Instances[0].Monitoring.State,
			architecture: Ec.Reservations[0].Instances[0].Architecture,
			blockDeviceMappings: Ec.Reservations[0].Instances[0].BlockDeviceMappings.DeviceName,
			children: [{
				name: SecurityGroups.SecurityGroups[0].GroupName,
				owner: SecurityGroups.SecurityGroups[0].OwnerId,
				groupId: SecurityGroups.SecurityGroups[0].GroupId,
				vpcId: SecurityGroups.SecurityGroups[0].VpcId,
				ipProtocol: SecurityGroups.SecurityGroups[0].IpPermissions[0].IpProtocol,
				cidrIp: SecurityGroups.SecurityGroups[0].IpPermissions[0].IpRanges[0].CidrIp,
				toPort: SecurityGroups.SecurityGroups[0].IpPermissions[0].ToPort,
				children: []
			},{
				name: SecurityGroups.SecurityGroups[1].GroupName,
				description: SecurityGroups.SecurityGroups[1].Description,
				owner: SecurityGroups.SecurityGroups[1].OwnerId,
				groupId: SecurityGroups.SecurityGroups[1].GroupId,
				vpcId: SecurityGroups.SecurityGroups[1].VpcId,
				children: []
			},{
				name: SecurityGroups.SecurityGroups[2].GroupName,
				owner: SecurityGroups.SecurityGroups[2].OwnerId,
				groupId: SecurityGroups.SecurityGroups[2].GroupId,
				ipPermissions: SecurityGroups.SecurityGroups[2].IpPermissions[0].IpRanges[0].CidrIp,
				ipPermissionsDescription: SecurityGroups.SecurityGroups[2].IpPermissions[0].IpRanges[0].Description,
				children: []
			}]
		}, {
			name: 'NO DATA',
			children: []
		}, {
			name: 'NO DATA',
			children: []
		}]
	}, {
		//Data For Subnets
		name: Subnet.Subnets[1].SubnetId,
		Owner: Subnet.Subnets[1].OwnerId,
		VpcId: Subnet.Subnets[1].VpcId,
		State: Subnet.Subnets[1].State,
		CidrBlock: Subnet.Subnets[1].CidrBlock,
		SubnetId: Subnet.Subnets[1].SubnetId,
		AvailabilityZone: Subnet.Subnets[1].AvailabilityZone,
		AvailabilityZoneId: Subnet.Subnets[1].AvailabilityZoneId,
		//Data For EC
		children: [{
				name: Ec.Reservations[1].Instances[0].InstanceId,
				instanceId: Ec.Reservations[1].Instances[0].InstanceId,
				publicIpAddress: Ec.Reservations[1].Instances[0].PublicIpAddress,
				instanceType: Ec.Reservations[1].Instances[0].InstanceType,
				monitoring: Ec.Reservations[1].Instances[0].Monitoring.State,
				architecture: Ec.Reservations[1].Instances[0].Architecture,
				blockDeviceMappings: Ec.Reservations[1].Instances[0].BlockDeviceMappings.DeviceName,
			children: [{
				name: SecurityGroups.SecurityGroups[3].GroupName,
				owner: SecurityGroups.SecurityGroups[3].OwnerId,
				groupId: SecurityGroups.SecurityGroups[3].GroupId,
				ipPermissions: SecurityGroups.SecurityGroups[3].IpPermissions[0].IpRanges[0].CidrIp,
				ipProtocol: SecurityGroups.SecurityGroups[3].IpPermissions[0].IpProtocol,
				
				children: []
			},{
				name: SecurityGroups.SecurityGroups[4].GroupName,
				owner: SecurityGroups.SecurityGroups[4].OwnerId,
				groupId: SecurityGroups.SecurityGroups[4].GroupId,
				ipPermissions: SecurityGroups.SecurityGroups[4].IpPermissions[0].IpRanges[0].CidrIp,
				ipProtocol: SecurityGroups.SecurityGroups[4].IpPermissions[0].IpProtocol,
				children: []
			},{
				name: SecurityGroups.SecurityGroups[5].GroupName,
				owner: SecurityGroups.SecurityGroups[5].OwnerId,
				groupId: SecurityGroups.SecurityGroups[5].GroupId,
				ipPermissions: SecurityGroups.SecurityGroups[5].IpPermissions[0].IpRanges[0].CidrIp,
				ipProtocol: SecurityGroups.SecurityGroups[5].IpPermissions[0].IpProtocol,
				children: []
			},{
				name: SecurityGroups.SecurityGroups[6].GroupName,
				owner: SecurityGroups.SecurityGroups[6].OwnerId,
				groupId: SecurityGroups.SecurityGroups[6].GroupId,
				ipPermissions: SecurityGroups.SecurityGroups[6].IpPermissions[0].IpRanges[0].CidrIp,
				ipProtocol: SecurityGroups.SecurityGroups[6].IpPermissions[0].IpProtocol,
				children: []
			}]
		}, {
			name: 'NO DATA',
			children: []
		}]
	}, {
		//Data For Subnets
		name: Subnet.Subnets[2].SubnetId,
		Owner: Subnet.Subnets[2].OwnerId,
		VpcId: Subnet.Subnets[2].VpcId,
		State: Subnet.Subnets[2].State,
		CidrBlock: Subnet.Subnets[2].CidrBlock,
		SubnetId: Subnet.Subnets[2].SubnetId,
		AvailabilityZone: Subnet.Subnets[2].AvailabilityZone,
		AvailabilityZoneId: Subnet.Subnets[2].AvailabilityZoneId,
		//Data For SubnetsEC
		children: [{
			name: 'NO DATA',
			children: []
		}, {
			name: 'NO DATA',
			children: []
		}, {
			name: 'NO DATA',
			children: []
		}]
	}]
};

