---
title: Workato connectors - Oracle new/updated row triggers
date: 2018-03-23 06:00:00 Z
---

# Oracle - New/updated row triggers

## New/updated row
This trigger picks up rows that are inserted/updated in the selected table or view. Each row is processed as a separate job. It checks for new/updated rows once every poll interval.

![New/updated row trigger](~@img/oracle/new-updated-row-trigger.png)
*New/updated row trigger*

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
        First, select a table/view to process rows from.
      </td>
    </tr>
    <tr>
      <td><a href="#unique-key">Unique key</a></td>
      <td>
        Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.
      </td>
    </tr>
    <tr>
      <td><a href="#sort-column">Sort column</a></td>
      <td>
        Now, select a column to identify updated rows.
      </td>
    </tr>
    <tr>
      <td><a href="#where-condition">WHERE condition</a></td>
      <td>
        Finally, provide an optional <code>WHERE</code> condition to filter rows.
      </td>
    </tr>
  </tbody>
</table>

## New/updated batch of rows
This trigger picks up rows that are inserted/updated in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new/updated rows once every poll interval.

![New/updated batch of rows trigger](~@img/oracle/new-updated-batch-of-rows-trigger.png)
*New/updated batch of rows trigger*

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
        First, select a table/view to process rows from.
      </td>
    </tr>
    <tr>
      <td><a href="#unique-key">Unique key</a></td>
      <td>
        Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.
      </td>
    </tr>
    <tr>
      <td><a href="#sort-column">Sort column</a></td>
      <td>
        Now, select a column to identify updated rows.
      </td>
    </tr>
    <tr>
      <td><a href="#batch-size">Batch size</a></td>
      <td>
        Next, configure the batch size to process in each individual job for this recipe.
      </td>
    </tr>
    <tr>
      <td><a href="#where-condition">WHERE condition</a></td>
      <td>
        Finally, provide an optional <code>WHERE</code> condition to filter rows.
      </td>
    </tr>
  </tbody>
</table>

## Input fields

### Table
Select the table/view to process rows from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

### Unique key
Values from this selected column is used to deduplicate rows in the selected table.

As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. `ID`). It should be incremental and sortable. This column can also be indexed for better performance.

Only columns that have **primary key ('P')** or **unique ('U')** constraints can be used. Run this SQL query to find out which columns fulfill this requirement.

```sql
SELECT c.column_name
FROM all_indexes i, all_ind_columns c
WHERE
  i.table_owner = 'TABLE_OWNER' AND
  i.table_name = 'TABLE_NAME' AND
  i.uniqueness = 'UNIQUE' AND
  i.table_name = c.table_name AND
  i.index_name = c.index_name
UNION
SELECT cc.column_name
FROM all_constraints con, all_cons_columns cc
WHERE
  con.table_owner = 'TABLE_OWNER' AND
  con.table_name = 'TABLE_NAME' AND
  con.constraint_type in ('U', 'P') AND
  con.table_name = cc.table_name AND
  con.constraint_name = cc.constraint_name
```
If no column can be found, check out our [best practices](/connectors/oracle/best-practices.md#designing-tables-for-use-in-workato) to find out how to make one.

### Sort column
Sort column is a column that is updated whenever a row in the table is updated. Typically, this is a timestamp column.

When a row is updated, the Unique key value remains the same. However, it should have it's timestamp updated to reflect the last updated time. Following this logic, Workato keeps track of values in this column together with values in the selected [**Unique key**](#unique-key) column. When a change in the **Sort column** value is observed, an updated row event will be recorded and processed by the trigger.

Only **date**, **timestamp**, **timestamp with time zone** and **timestamp with local time zone** column types can be used. Run this SQL query to find out which columns fulfill this requirement.

```sql
SELECT column_name
FROM all_tab_columns
WHERE
  owner = 'WORKATO' AND
  table_name = 'ORACLE_STRING' AND
  (data_type LIKE 'TIMESTAMP%' OR data_type LIKE 'DATE%')
```

If no column can be found, check out our [best practices](/connectors/oracle/best-practices.md#designing-tables-for-use-in-workato) to find out how to make one.

### Batch size
Batch size of rows to return in each job. This can be any number between **1** and the maximum batch size. Maximum batch size is **100** and default is **100**.

In any given poll, if there are less rows than the configured batch size, this trigger will deliver all rows as a smaller batch.

### WHERE condition
This condition is used to filter rows based on one or more column values.

```sql
status = 'closed' and priority > 3
```

Leave blank to process all rows from the selected table.

Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/connectors/oracle/introduction.md#using-where-conditions) guide for more information.

## List of Workato triggers and actions
Workato currently supports the following triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the side bar.

  * [New row trigger](/connectors/oracle/new-row-trigger.md)
  * [Select actions](/connectors/oracle/select.md)
  * [Insert actions](/connectors/oracle/insert.md)
  * [Update actions](/connectors/oracle/update.md)
  * [Upsert actions](/connectors/oracle/upsert.md)
  * [Delete actions](/connectors/oracle/delete.md)
  * [Run custom SQL action](/connectors/oracle/run_sql.md)
  * [Execute stored procedure](/connectors/oracle/stored-procedure.md)

  Or get busy building your recipes now! Check out our
  * [Best practices](/connectors/oracle/best-practices.md)
  * [Use cases](/connectors/database-common-use-cases.md)
