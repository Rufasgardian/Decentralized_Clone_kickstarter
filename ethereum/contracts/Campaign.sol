pragma solidity ^0.4.25;


contract CampaignFactory {
    address[] public deployedCampaigns;


    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);

        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address []){
        return deployedCampaigns;
    }

}



contract Campaign {
    
    struct Request{
        string description;
        uint value;
        address recipient; // to whom money goes to
        bool complete;
        uint approvalCount;
        mapping(address => bool)approvals ;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    constructor(uint minimum, address creator) public{
        manager = creator;
        minimumContribution = minimum;
    }
    
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount += 1;
    }
    
    function createRequest(string arg_description, uint arg_value, address arg_recipient) public restricted{
        
        Request memory newRequest = Request({
            description: arg_description,
            value: arg_value,
            recipient: arg_recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(newRequest);
    }    
    
    function approveRequest(uint index) public {

        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!(requests[index].approvals[msg.sender]));

        request.approvals[msg.sender] = true;
        request.approvalCount += 1;
    }

    function finalizeRequest(uint index) public restricted {

        Request storage request = requests[index];

        require(!request.complete);
        require(request.approvalCount > approversCount / 2);

        request.recipient.transfer(request.value);
        request.complete = true;

    }
    
    
}