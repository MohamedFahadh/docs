---
title: Workato connectors - Oracle new row triggers
date: 2018-03-23 06:00:00 Z
---

# Oracle - New row triggers

## New row
This trigger picks up rows that are inserted in the selected table or view. Each row is processed as a separate job. It checks for new rows once every poll interval.

![New row trigger](~@img/oracle/new-row-trigger.png)
<center><i>New row trigger</i></center>

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table</td>
      <td>
        First, select a table/view to process rows from.
      </td>
    </tr>
    <tr>
      <td>Unique key</td>
      <td>
        Next, select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.
      </td>
    </tr>
    <tr>
      <td>WHERE condition</td>
      <td>
        Finally, provide an optional <code>WHERE</code> condition to filter rows.
      </td>
    </tr>
  </tbody>
</table>

## New batch of rows
This trigger picks up rows that are inserted in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval.

![New batch of rows trigger](~@img/oracle/new-batch-of-rows-trigger.png)
<center><i>New batch of rows trigger</i></center>

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
Values from this selected column is used to deduplicate rows in the selected table, making sure that the same row is not processed twice in the same recipe.

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

  * [New/updated row trigger](/connectors/oracle/updated-row-trigger.md)
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
