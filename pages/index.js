import React, {Component} from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from  '../components/Layout';

class CampaignIndex extends Component{

    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployed().call();


        return { campaigns: campaigns};
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>view campaign</a>,
                fluid: true
            };
        });

        return <Card.Group items = {items} />;  // 2nd items is const one
    }
    
    render() {
        return  (   
                    <Layout>
                        <div>
                            <link
                                async
                                rel="stylesheet"
                                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
                            />

                            <h3>Open Campaigns</h3>
                            {this.renderCampaigns()}

                            <Button
                                content="Create Campaign"
                                icon="add circle"
                                primary
                            />
                        </div>
                    </Layout>
                );
    }
}

export default CampaignIndex;
