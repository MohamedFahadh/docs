---
title: Workato connectors - Zendesk new/updated user trigger
date: 2019-05-28 18:00:00 Z
search:
    keywords: ['zendesk', 'user', 'trigger', 'create', 'updated', 'new']
---

# Zendesk - New/updated user trigger
This trigger picks up users that are created or updated. Each user is processed as a separate job. It checks for new jobs once every poll interval.

![New/updated user trigger](~@img/connectors/zendesk/updated-user-trigger.png)
*New/updated user trigger*

### Input fields
| Input field | Description |
|-------------|-------------|
| From        | Users created or updated after this time will be processed by the recipe. If left blank, the default date will be set to **one day** before the recipe is first started. |

### Output fields
The output of this action contains the full set of columns from the selected user. Here are some of the commonly used outputs.

| Output field | Description                                  |
|--------------|----------------------------------------------|
| ID           | The unique Zendesk ID of the user. This is automatically assigned when the user is created. |
| Role         | The role of the user. Permitted values are `End-user`, `Agent`, or `Administrator`. |
| Email        | The primary email of the user.               |
| Organization ID | The unique Zendesk ID of the user's organization. If the user has more than one organization membership, it will display the user's default organization. |
| User custom fields | Includes data of user custom field(s). |

Click here for a full list of [user outputs](/connectors/zendesk/user-fields.md#user-output-fields).
