---
title: Workato connectors - SQL Server new row triggers
date: 2018-03-23 06:00:00 Z
---

# SQL Server - New row triggers

## New row
This trigger picks up rows that are inserted in the selected table or view. Each row is processed as a separate job. It checks for new rows once every poll interval.

![New row trigger](~@img/mssql/new-row-trigger.png)
<center><i>New row trigger*</i></center>

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#table">Table</a></td>
      <td>
        Select a table/view to process rows from.
      </td>
    </tr>
    <tr>
      <td><a href="#unique-key">Unique key</a></td>
      <td>
        Select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.
      </td>
    </tr>
    <tr>
      <td><a href="#where-condition">WHERE condition</a></td>
      <td>
        Provide an optional <code>WHERE</code> condition to filter rows.
      </td>
    </tr>
  </tbody>
</table>

## New batch of rows
This trigger picks up rows that are inserted in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval.

![New batch of rows trigger](~@img/mssql/new-batch-of-rows-trigger.png)
<center><i>New batch of rows trigger*</i></center>

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#table">Table</a></td>
      <td>
        Select a table/view to process rows from.
      </td>
    </tr>
    <tr>
      <td><a href="#unique-key">Unique key</a></td>
      <td>
        Select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.
      </td>
    </tr>
    <tr>
      <td><a href="#batch-size">Batch size</a></td>
      <td>
        Configure the batch size to process in each individual job for this recipe.
      </td>
    </tr>
    <tr>
      <td><a href="#where-condition">WHERE condition</a></td>
      <td>
        Provide an optional <code>WHERE</code> condition to filter rows.
      </td>
    </tr>
  </tbody>
</table>

## New batch of rows via custom SQL
This trigger picks up rows when any rows matching the custom SQL are inserted. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval.

## Supported versions
This trigger is only supported for SQL Server 2012 or newer. It uses a default stored procedure `sp_describe_first_result_set` that is only available from SQL Server 2012 onwards.

![New batch of rows via custom SQL trigger](~@img/mssql/new-batch-of-rows-via-custom-sql-trigger.png)
<center><i>New batch of rows trigger via custom SQL*</i></center>

**This trigger is not supported for SQL Server 2008 version or earlier.**

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#sql">SQL</a></td>
      <td>
        Custom SQL query to be executed at each poll interval to pick up new rows.
      </td>
    </tr>
    <tr>
      <td><a href="#unique-key">Unique key</a></td>
      <td>
        Select a unique key column to uniquely identify rows. This list of columns are generated from custom SQL provided.
      </td>
    </tr>
    <tr>
      <td><a href="#batch-size">Batch size</a></td>
      <td>
        Configure the batch size to process in each individual job for this recipe. This defaults to 100.
      </td>
    </tr>
  </tbody>
</table>

## Input fields

### Table
Select the table/view to process rows from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

### Unique key
Values from this selected column is used to deduplicate rows in the selected table, making sure that the same row is not processed twice in the same recipe.

As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. `ID`). It should be incremental and sortable. This column can also be indexed for better performance.

Only columns that have **PRIMARY KEY** or **UNIQUE** constraints can be used. Run this SQL query to find out which columns fulfill this requirement.

```sql
SELECT col.column_name
FROM INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE col
JOIN INFORMATION_SCHEMA.TABLE_CONSTRAINTS c ON c.constraint_name = col.constraint_name
WHERE
  c.constraint_type IN ('PRIMARY KEY','UNIQUE') AND
  c.table_schema='schema_name' AND
  c.table_name='table_name'
```

If no column can be found, check out our [best practices](/connectors/mssql/best-practices.md#designing-tables-for-use-in-workato) to find out how to make one.

### Batch size
Batch size of rows to return in each job. This can be any number between **1** and the maximum batch size. Maximum batch size is **100** and default is **100**.

In any given poll, if there are less rows than the configured batch size, this trigger will deliver all rows as a smaller batch.

### WHERE condition
This condition is used to filter rows based on one or more column values.

```sql
status = 'closed' and priority > 3
```

Leave blank to process all rows from the selected table.

Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/connectors/mssql/introduction.md#using-where-conditions) guide for more information.

### SQL
Provide the SQL to be executed to select rows. The SQL here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes (`''`).

Avoid using limit clauses like `TOP` in your SQL. This is because the limit to the number of rows returned in the query is based on the value defined in the **Batch size** input field. Adding your own limit clause will cause the action to fail.

## Next steps
Learn more about the other triggers and actions Workato has to offer for SQL server
  * [New/updated row trigger](/connectors/mssql/updated-row-trigger.md)
  * [Select actions](/connectors/mssql/select.md)
  * [Insert actions](/connectors/mssql/insert.md)
  * [Update actions](/connectors/mssql/update.md)
  * [Upsert actions](/connectors/mssql/upsert.md)
  * [Delete actions](/connectors/mssql/delete.md)
  * [Run custom SQL action](/connectors/mssql/run_sql.md)
  * [Execute stored procedure](/connectors/mssql/stored-procedure.md)

Or get busy building your recipes now! Check out our
  * [Best practices](/connectors/mssql/best-practices.md)
  * [Use cases](/connectors/database-common-use-cases.md)
