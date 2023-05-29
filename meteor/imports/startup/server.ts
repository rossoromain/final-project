// APOLLO
import { Meteor } from 'meteor/meteor';
import { ApolloServer } from "apollo-server-express";
// import createSchema from "../../api/graphql/resolvers/index";


/* async function initApollo() {
    const schema = await createSchema();
    const server = new ApolloServer({ schema, context, tracing: false, });
} */

Meteor.startup(() => {
    console.log('Startup of Meteor');

    const { NODE_ENV, CRON_ACTIV } = process.env;

    if (NODE_ENV == 'production') {
        console.log('Starting production environment ...');
    } else if (NODE_ENV == 'development') {
        console.log('Starting development environment ...');
    }

    if (CRON_ACTIV === "true") {
        console.log('-> Initializing CRON');
    } else if (CRON_ACTIV === "false") {
        console.log('-> CRON off');
    }

    try {
        //init users and roles

    } catch (error) {
        console.log('Error: ' + 'error initializing users and roles.\n' + error);
    }
})