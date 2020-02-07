---
title: Workato connectors - ServiceNow new/updated record triggers
date: 2018-05-30 06:00:00 Z
---

# ServiceNow - New/updated record triggers

## New/updated record
This trigger picks up records that are created or updated in the selected table. Each record is processed as a separate job. It checks for new or updated records once every poll interval.

![New/updated record trigger](~@img/connectors/servicenow/updated-record-trigger.png)
*New/updated record trigger*

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#from">From</a></td>
      <td>
        Records created or updated after this time will be processed by the recipe. If left blank, the default time will be set to <b>one day</b> before the recipe is first started.
      </td>
    </tr>
    <tr>
      <td><a href="#table">Table</a></td>
      <td>
        Select a table to pick up new or updated records from.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output datatree of this trigger contains the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.

![Output fields](~@img/connectors/servicenow/extended-output.gif)
*Output fields*

## New/updated record (real-time)
This trigger picks up records in the selected table as soon they are created or updated. Each record is processed as a separate job. It makes use of business rules to detect and trigger a new or updated record event to be processed.

**To use this trigger, the connected user must have sufficient access control to sys_script table. Learn how to configure [access control for real time triggers](/connectors/servicenow.md#real-time-trigger).**

![New/updated record trigger](~@img/connectors/servicenow/updated-record-trigger-real-time.png)
*New/updated record trigger*

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#unique-key">From</a></td>
      <td>
        Records created or updated after this time will be processed by the recipe. If left blank, the default time will be set to <b>one day</b> before the recipe is first started.
      </td>
    </tr>
    <tr>
      <td><a href="#table">Table</a></td>
      <td>
        Select a table to pick up new or updated records from.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output datatree of this trigger contains the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.

![Output fields](~@img/connectors/servicenow/extended-output.gif)
*Output fields*

## Input field definitions

### From
This is a user-defined time that marks the earliest time that the trigger should pick up created or updated records. If left blank, the default time will be set to <b>one day</b> before the recipe is first started.

The **Updated (sys_updated_on)** column is used to determine the time that a record is created or updated. Only records with **Updated (sys_updated_on)** timestamp later than the time specified in **From** will be processed by the trigger.

![Updated (sys_updated_on) timestamp](~@img/connectors/servicenow/sys-updated-on.png)
*Updated (sys_updated_on) timestamp*

### Table
Select the table to process records from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

Make sure that the user used in the connection has [sufficient access control](/connectors/servicenow.md#roles-and-permissions-required-to-connect) to the selected table.
