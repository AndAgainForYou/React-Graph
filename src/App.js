import React, { useState } from 'react';
import { Tree } from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';
import data from './data';
import './App.css';


const App = (event, node) => {
  
  const [currentNode, setNode] = useState({
    owner: '1', node: '1', state: '1', cidrBlock: '1', 
    availabilityZone: '1', availabilityZoneId: '1', vpcId: '1', instanceId: '1', 
    publicIpAddress: '1', instanceType: '1', monitoring: '1', architecture: '1', 
    blockDeviceMappings: '1', groupId: '1', ipProtocol: '1',cidrIp: '1', 
    toPort: '1',description: '1',ipPermissions: '1',ipPermissionsDescription: '1'});

  const [mode, setMode] = useState(false);
  const [modeTwo, setModeTwo] = useState(false);

  const handleClickOne = (event, node) => {
    if(node === 'subnet-974675'){setNode({
      node: `${node}`, 
      owner: data.children[0].Owner,
      vpcId: data.children[0].VpcId,
      state: data.children[0].State,
      cidrBlock: data.children[0].CidrBlock,
      availabilityZone: data.children[0].AvailabilityZone,
      availabilityZoneId: data.children[0].AvailabilityZoneId,
      
    })}
    else if(node === 'subnet-86b5aa'){setNode({
        node: `${node}`, 
        owner: data.children[1].Owner,
        vpcId: data.children[1].VpcId,
        state: data.children[1].State,
        cidrBlock: data.children[1].CidrBlock,
        availabilityZone: data.children[1].AvailabilityZone,
        availabilityZoneId: data.children[1].AvailabilityZoneId,
      })}
      else if(node === 'subnet-53054d'){setNode({
          node: `${node}`, 
          owner: data.children[2].Owner,
          vpcId: data.children[2].VpcId,
          state: data.children[2].State,
          cidrBlock: data.children[2].CidrBlock,
          availabilityZone: data.children[2].AvailabilityZone,
          availabilityZoneId: data.children[2].AvailabilityZoneId,
        })}
        else if(node === 'i-0e64c0568298b'){setNode({
          node: `${node}`,
          instanceId: data.children[0].children[1].instanceId,
          publicIpAddress: data.children[0].children[1].publicIpAddress,
          instanceType: data.children[0].children[1].instanceType,
          monitoring: data.children[0].children[1].monitoring,
          architecture: data.children[0].children[1].architecture,
          blockDeviceMappings: data.children[0].children[1].blockDeviceMappings,
        })}
        else if(node === 'i-011fdafa7248d'){setNode({
          node: `${node}`,
          instanceId: data.children[1].children[0].instanceId,
          publicIpAddress: data.children[1].children[0].publicIpAddress,
          instanceType: data.children[1].children[0].instanceType,
          monitoring: data.children[1].children[0].monitoring,
          architecture: data.children[1].children[0].architecture,
          blockDeviceMappings: data.children[1].children[0].blockDeviceMappings,
        })}
        else if(node === 'launch-wizard-2'){setNode({
          node: `${node}`,
          owner: data.children[0].children[1].children[0].owner,
          groupId: data.children[0].children[1].children[0].groupId,
          vpcId: data.children[0].children[1].children[0].vpcId,
          ipProtocol: data.children[0].children[1].children[0].ipProtocol,
          cidrIp: data.children[0].children[1].children[0].cidrIp,
          toPort: data.children[0].children[1].children[0].toPort,
        })}
        else if(node === 'SecurityGroup-WG6JCFKN79JZ'){setNode({
          node: `${node}`,
          description: data.children[0].children[1].children[1].description,
          groupId: data.children[0].children[1].children[1].groupId,
          owner: data.children[0].children[1].children[1].owner,
          vpcId: data.children[0].children[1].children[1].vpcId,
         
        })}
        else if(node === 'launch-wizard-1'){setNode({
          node: `${node}`,
          owner: data.children[0].children[1].children[2].owner,
          groupId: data.children[0].children[1].children[2].groupId,
          ipPermissions: data.children[0].children[1].children[2].ipPermissions,
          ipPermissionsDescription: data.children[0].children[1].children[2].ipPermissionsDescription,

        })}
        else if(node === 'launch-wizard-6'){setNode({
          node: `${node}`,
          owner: data.children[1].children[0].children[0].owner,
          groupId: data.children[1].children[0].children[0].groupId,
          ipPermissions: data.children[1].children[0].children[0].ipPermissions,
          ipPermissionsDescription: data.children[1].children[0].children[0].ipProtocol,

        })}
        else if(node === 'docker-internal'){setNode({
          node: `${node}`,
          owner: data.children[1].children[0].children[1].owner,
          groupId: data.children[1].children[0].children[1].groupId,
          ipPermissions: data.children[1].children[0].children[1].ipPermissions,
          ipPermissionsDescription: data.children[1].children[0].children[1].ipProtocol,
        })}
        else if(node === 'OpenVPN SG'){setNode({
          node: `${node}`,
          owner: data.children[1].children[0].children[2].owner,
          groupId: data.children[1].children[0].children[2].groupId,
          ipPermissions: data.children[1].children[0].children[2].ipPermissions,
          ipPermissionsDescription: data.children[1].children[0].children[2].ipProtocol,
        })}
        else if(node === 'default'){setNode({
          node: `${node}`,
          owner: data.children[1].children[0].children[3].owner,
          groupId: data.children[1].children[0].children[3].groupId,
          ipPermissions: data.children[1].children[0].children[3].ipPermissions,
          ipPermissionsDescription: data.children[1].children[0].children[3].ipProtocol,
        })} else if(node === 'NO DATA'){setNode({
          node: `${node}`
        })};
    setMode(true);
  };
  let DataSection = () => {
    return (
      <div className='block'>
        <button onClick={() => {setMode(false); setNode({node: '1'})}} className='button'>X</button>
        <div className='wision-node'>-- Node properties --</div>
        <div className='wision-right'>Name:  {currentNode.node}</div>
        <div className='wision-right'>OwnerId:  {currentNode.owner}</div>
        <div className='wision-right'>VpcId:  {currentNode.vpcId}</div>
          <div>{modeTwo ? <div className='wision-right'>State:  {currentNode.state}</div> : ''}
            {modeTwo ? <div className='wision-right'>CidrBlock:  {currentNode.cidrBlock}</div> : ''}
            {modeTwo ? <div className='wision-right'>AvailabilityZone:  {currentNode.availabilityZone}</div> : ''}
            {modeTwo ? <div className='wision-right'>AvailabilityZoneId:  {currentNode.availabilityZoneId}</div> : ''}
            <div className='wision-right button-two' onClick={() => {setModeTwo(!modeTwo)}} type='button'>...</div>
            <div className='background'></div>
          </div>
      </div>
    );
  };
  let DataSection2 = () => {
    return(
      <div className='block'>
        <button onClick={() => {setMode(false); setNode({node: '1'})}} className='button'>X</button>
        <div className='wision-node'>-- Node Properties --</div>
        <div className='wision-right'>Name: {currentNode.node}</div>
        <div className='wision-right'>InstanceId:  {currentNode.instanceId}</div>
        <div className='wision-right'>PublicIpAddress:  {currentNode.publicIpAddress}</div>
          <div>
            {modeTwo ? <div className='wision-right'>InstanceType:  {currentNode.instanceType}</div> : ''}
            {modeTwo ? <div className='wision-right'>Monitoring:  {currentNode.monitoring}</div> : ''}
            {modeTwo ? <div className='wision-right'>Architecture:  {currentNode.architecture}</div> : ''}
            {modeTwo ? <div className='wision-right'>BlockDeviceMappings:  {currentNode.blockDeviceMappings}</div> : ''}
            <div className='wision-right button-two' onClick={() => {setModeTwo(!modeTwo)}} type='button'>...</div>
            <div className='background'></div>
          </div>
      </div>
    );
  }
  let DataSection3 = () => {
    return(
      <div className='block'>
        <button onClick={() => {setMode(false); setNode({node: '1'})}} className='button'>X</button>
        <div className='wision-node'>-- Node Properties --</div>
        <div className='wision-right'>Name:  {currentNode.node}</div>
        <div className='wision-right'>Owner:  {currentNode.owner}</div>
        <div className='wision-right'>GroupId:  {currentNode.groupId}</div>
          <div>
            {modeTwo ? <div className='wision-right'>VpcId:  {currentNode.vpcId}</div> : ''}
            {modeTwo ? <div className='wision-right'>IpProtocol:  {currentNode.ipProtocol}</div> : ''}
            {modeTwo ? <div className='wision-right'>CidrIp:  {currentNode.cidrIp}</div> : ''}
            {modeTwo ? <div className='wision-right'>ToPort:  {currentNode.toPort}</div> : ''}
            <div className='wision-right button-two' onClick={() => {setModeTwo(!modeTwo)}} type='button'>...</div>
            <div className='background'></div>
          </div>
      </div>
    );
  }
  let DataSection4 = () => {
    return(
      <div className='block'>
        <button onClick={() => {setMode(false); setNode({node: '1'})}} className='button'>X</button>
        <div className='wision-node'>-- Node Properties --</div>
        <div className='wision-right'>Name:  {currentNode.node}</div>
        <div className='wision-right'>Owner:  {currentNode.owner}</div>
        <div className='wision-right'>Description:  {currentNode.description}</div>
          <div>
            {modeTwo ? <div className='wision-right'>GroupId:  {currentNode.groupId}</div> : ''}
            {modeTwo ? <div className='wision-right'>VpcId:  {currentNode.vpcId}</div> : ''}
            <div className='wision-right button-two' onClick={() => {setModeTwo(!modeTwo)}} type='button'>...</div>
            <div className='background'></div>
          </div>
      </div>
    );
  }
  let DataSection5 = () => {
    return(
      <div className='block'>
        <button onClick={() => {setMode(false); setNode({node: '1'})}} className='button'>X</button>
        <div className='wision-node'>-- Node Properties --</div>
        <div className='wision-right'>IpPermissions:  {currentNode.ipPermissions}</div>
        <div className='wision-right'>Owner:  {currentNode.owner}</div>
        <div className='wision-right'>GroupId:  {currentNode.groupId}</div>
          <div>
            {modeTwo ? <div className='wision-right'>IpDescription:  {currentNode.ipPermissionsDescription}</div> : ''}
            <div className='wision-right button-two' onClick={() => {setModeTwo(!modeTwo)}} type='button'>...</div>
            <div className='background'></div>
          </div>
      </div>
    );
  }
  return (
    <div className='allWision'>
      <div className='wision'>
        <Tree
          gProps={{className: 'node',
                  onClick: handleClickOne}}
          data={data}
          nodeRadius={25}
          margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
          height={600}
          width={1000}/>
      </div>
      <div>{(mode && currentNode.node === 'subnet-974675') ? <DataSection/> :
            (mode && currentNode.node === 'subnet-86b5aa') ? <DataSection/> :
            (mode && currentNode.node === 'subnet-53054d') ? <DataSection/> : 
            (mode && currentNode.node === 'i-0e64c0568298b') ? <DataSection2/> :
            (mode && currentNode.node === 'i-011fdafa7248d') ? <DataSection2/> :
            (mode && currentNode.node === 'launch-wizard-2') ? <DataSection3/> :
            (mode && currentNode.node === 'SecurityGroup-WG6JCFKN79JZ') ? <DataSection4/> :
            (mode && currentNode.node === 'launch-wizard-1') ? <DataSection5/> :
            (mode && currentNode.node === 'launch-wizard-6') ? <DataSection5/> :
            (mode && currentNode.node === 'docker-internal') ? <DataSection5/> :
            (mode && currentNode.node === 'OpenVPN SG') ? <DataSection5/> :
            (mode && currentNode.node === 'default') ? <DataSection5/> : <div className='wision-node2'>-- Choose Section --</div> }</div>
     </div>
  );
}

export default App;
