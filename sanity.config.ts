import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk';

const config =  defineConfig({
    name: 'default',
    title: 'azure-dugong',
  
    projectId: '65pmix48',
    dataset: 'production',
    plugins:[deskTool()],
    basePath:"/admin",
   
  })

  export default config;