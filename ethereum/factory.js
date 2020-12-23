import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const contract = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xf5b5F90563B79406D9D8f064A5259c176703d8af'
);

export default contract;