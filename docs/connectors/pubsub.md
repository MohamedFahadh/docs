---
title: Workato connectors - PubSub by Workato
date: 2020-01-07 00:00:00 Z
---

# PubSub by Workato
The PubSub connector enables you to implement integration solutions that require an event-driven, message-oriented architecture that decouples publishers and consumers. The connector implements a messaging system with support for guaranteed and persistent delivery. This allows us to chain recipes sequentially, as a recipe can publish a message that multiple other recipes consume as a trigger to kickstart their workflow.

This connector allows us to add or modify recipes which are consumers without affecting recipes which are publishers. This enables zero downtime for the publisher recipe as we can add new consumers without impacting or requiring changes in the publisher recipe. This decoupling results in simpler recipes and reduces the time required to create, test, and maintain recipes.

## How to connect to the PubSub connector on Workato
There is no connection required to use the PubSub connector, as schemas are stored in the Workato account for recipes to interact with.

In order to work with the PubSub connector, users require access to the PubSub topics feature. Reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

## How to use PubSub topics
You can go to the PubSub main page by clicking **Tools** > **Pub/Sub Topics**. Here, you can view all the topics that are active on your Workato account.

![Manage topics in PubSub](~@img/connectors/pubsub/manage-topics.png)
*Manage topics in PubSub*

You can use the **search topics** function to quickly locate topics by keyword.

### Creating and managing topics
In order to work with PubSub messages, you have to first create and define a topic. So publishers and consumers alike know what to expect when sending or receiving messages.

Click on **New topic** to get started.

![New topic](~@img/connectors/pubsub/new-topic.png)
*New topic*

When creating topics, you will need to define what the messages will look like.

| Field        | Description                                                        |
|--------------|--------------------------------------------------------------------|
| Name         | The name of your new topic. |
| Schema       | The message fields for this topic. See more [here](#topic-schema-configuration). |

#### Topic schema configuration
When creating topics, you will need to define what the message will look like. This structure can be subsequently edited.

![Defining topic schema](~@img/connectors/pubsub/add-new-field.png)
*Defining topic schema*

| Field     | Description                                              |
|-----------|----------------------------------------------------------|
| Name      | The name of a new message field.                         |
| Data type | Select the data type from a dropdown.                    |
| Optional  | Choose if this message field is optional. Default is No. |
| Hint      | Provide a hint for this message field.                   |

> Besides entering each field manually, you can define the topic schema with a sample json.

## Working with the PubSub connector
After configuring your topics schema, you can now subscribe to messages using the [New message trigger](#using-the-new-message-trigger) or publish messages using the [Publish message action](#using-the-publish-message-action)

### Using the new message trigger
The new message trigger allows us to subscribe to a specific topic in Workato. Any messages published to that topic will be picked up by the trigger as a single trigger event.

![New message trigger configuration](~@img/connectors/pubsub/new-message-trigger.png)
*Select the topic to configure the new message trigger*

### Using the publish message action
The publish action allows us to publish messages to a specific topic in Workato. Any messages published to that topic will be picked up by the new message trigger as a single trigger event.

![Publish message action configuration](~@img/connectors/pubsub/publish-message-action.png)
*Select the topic and fill in the input fields to configure the publish message action*

### Example scenario using the PubSub connector
For example, we have a recipe that creates leads in Salesforce upon receiving a WebToLead HTTP request, built to retrieve contact data from leads who filled in a form online. After creating the lead, the recipe updates an analytics database in Postgres.

![Original recipe](~@img/connectors/pubsub/original-pubsub-recipe.png)
*Recipe moving leads from an online form to Salesforce and PostgreSQL*

If our organization was to change databases from PostgreSQL to RedShift, and start using MailChimp as a mailing list application, we have 2 approaches we can take.

1) Modify the original recipe without using the PubSub connector

We would need to update our recipe as follows.

![Modified recipe](~@img/connectors/pubsub/modified-original-recipe.png)
*Modified recipe to add rows to Redshift instead of PostgreSQL and add subscribers to MailChimp*

The change to the original recipe would require additional iterations of the recipe development lifecycle, as the recipe would need to be modified, tested for backward compatibility, and pushed to production. Any bugs slipping through QA would result in downtime for the production recipe.

2) Use the PubSub connector

If we were utilizing the PubSub connector and queues, we could have built the original recipe in this way, to create a Salesforce lead before publishing the lead data to a topic. This recipe will not need to care about its consumers, and therefore it does not need to know that downstream recipes are changing from PostgreSQL to Redshift, or that there is an additional consumer writing to MailChimp.

![Publisher recipe](~@img/connectors/pubsub/recipe-with-publish-step.png)
*Publisher recipe that creates a lead in Salesforce and publishes lead data to a topic*

The corresponding consumer recipe that creates a Redshift row with the lead data will look as follows.

![Consumer recipe creating Redshift row](~@img/connectors/pubsub/consumer-recipe-creating-redshift-row.png)
*Consumer recipe that consumes the lead data from the topic and creates a Redshift row with the lead data*

The corresponding consumer recipe that creates a MailChimp lead with the lead data will look as follows.

![Consumer recipe creating MailChimp lead](~@img/connectors/pubsub/consumer-recipe-creating-mailchimp-lead.png)
*Consumer recipe that consumes the lead data from the topic and creates a MailChimp lead with the lead data*
