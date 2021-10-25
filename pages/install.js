import { Layout, Page, SettingToggle, TextStyle } from "@shopify/polaris";
import React, { useState } from "react";
import { useAxios } from "../hooks/useAxios";

function install(){

    const [axios] = useAxios();
    const [isInstalled, setIsInstalled] = useState(null);
    const titleDescription = isInstalled ? 'Uninstall' : 'Install';
    const bodyDescription = isInstalled ? 'installed' : 'uninstalled';
    
    async function handleAction(){

        if(!isInstalled){
            axios.post('https://6792-45-59-35-96.ngrok.io/script_tag');
        }
        setIsInstalled(oldValue => !oldValue);
    
    };

    return(

        <Page>
            <Layout.AnnotatedSection
                title={`${titleDescription} banner`}
                description='Toggle banner installation on your shop'
            >
                <SettingToggle
                    action={{
                        content: titleDescription,
                        onAction: handleAction
                    }}
                    enabled={true}
                >

                    The banner script is {' '} 
                    <TextStyle variation='strong'>{bodyDescription}</TextStyle>

                </SettingToggle>
            </Layout.AnnotatedSection>
        </Page>

    );
    
};

export default install;





