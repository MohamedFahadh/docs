---
title: Workato connectors - MySQL
date: 2018-02-02 06:10:00 Z
---

# MySQL
[MySQL](http://www.MySQL.com/) is an open-source relational database management system hosted either in the cloud or on-premise.

## Supported editions
All editions of MySQL are supported.

## How to connect to MySQL on Workato
The MySQL connector uses basic authentication to authenticate with MySQL.
![Configured MySQL connection](~@img/mysql/connection.png)

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection name</td>
      <td>Give this MySQL connection a unique name that identifies which MySQL instance it is connected to.</td>
    </tr>
    <tr>
      <td>On-prem secure agent</td>
      <td>Choose an on-premise agent if your database is running in a network that does not allow direct connection. Before attempting to connect, make sure you have an active on-premise agent. Refer to the <a href="/on-prem.html">On-premise agent</a> guide for more information.</td>
    </tr>
    <tr>
      <td>Username</td>
      <td>Username to connect to MySQL.</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>Password to connect to MySQL.</td>
    </tr>
    <tr>
      <td>Host</td>
      <td>URL of your hosted server.</td>
    </tr>
    <tr>
      <td>Port</td>
      <td>Port number that your server is running on, typically <b>3306</b>.</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>Name of the MySQL database you wish to connect to.</td>
    </tr>
  </tbody>
</table>

### Permissions required to connect

At minimum, the database user account must be granted `SELECT` permission to the database specified in the [connection](#how-to-connect-to-mysql-on-workato).

If we are trying to connect to a named database (`HR_PROD`) in a MySQL instance, using a new database user `workato`, the following example queries can be used.

First, create a new user dedicated to integration use cases with Workato.
```sql
CREATE USER 'workato' IDENTIFIED BY 'password';
```

This allows the user to have login access to the MySQL instance. However, this user will not have access to any tables.

The next step is to grant access to all tables in `HR_PROD`. In this example, we only wish to grant `SELECT` permissions.

```sql
GRANT SELECT ON `HR_PROD`.* TO 'workato';
```

Finally, check that this user has the necessary permissions. Run a query to see all grants.

```sql
SHOW GRANTS FOR 'workato';
```

This should return the following minimum permission to create a MySQL connection on Workato.

```
+---------------------------------------------------------------------+
| Grants for workato@%                                                |
+---------------------------------------------------------------------+
| GRANT USAGE ON *.* TO 'workato'@'%' IDENTIFIED BY PASSWORD <secret> |
| GRANT SELECT ON `HR_PROD`.* TO 'workato'@'%'                        |
+---------------------------------------------------------------------+
2 rows in set (0.24 sec)
```

## Working with the MySQL connector

### Table, view and stored procedure
The MySQL connector works with all tables, views and stored procedures. These are available in pick lists in each trigger/action or you can provide the exact name.

![Table selection from pick list](~@img/mysql/table_pick_list.png)
*Select a table/view from pick list*

![Exact table name provided](~@img/mysql/table_name_text.png)
*Provide exact table/view name in a text field*

Case sensitivity of the name of a table/view depends on your database implementation. The underlying OS that your database is hosted determines if you need to provide exact table/view names. Typically, database and table names are case insensitive in Windows.

### Single row vs batch of rows
MySQL connector can read or write to your database either as a single row or in batches. When using batch triggers/actions, you have to provide the batch size you wish to work with. The batch size can be any number between 1 and 100, with 100 being the maximum batch size.

![Batch trigger inputs](~@img/mysql/batch_trigger_input.png)
*Batch trigger inputs*

Besides the difference in input fields, there is also a difference between the outputs of these 2 types of operations. A trigger that processes rows one at a time will have an output datatree that allows you to map data from that single row.

![Single row output](~@img/mysql/single_row_trigger_output.png)
*Single row output*

However, a trigger that processes rows in batches will output them as an array of rows. The <kbd>Rows</kbd> datapill indicates that the output is a list containing data for each row in that batch.

![Batch trigger output](~@img/mysql/batch_trigger_output.png)
*Batch trigger output*

As a result, the output of batch triggers/actions needs to be handled differently. This [recipe](https://www.workato.com/recipes/660208) uses a batch trigger for new rows in the `users` table. The output of the trigger is used in a Salesforce bulk upsert action that requires mapping the <kbd>Rows</kbd> datapill into the source list.

![Using batch trigger output](~@img/mysql/using_batch_output.png)
*Using batch trigger output*

### WHERE condition
This input field is used to filter and identify rows to perform an action on. It is used in multiple triggers and actions in the following ways:
- filter rows to be picked up in triggers
- filter rows in **Select rows** action
- filter rows to be deleted in **Delete rows** action

This clause will be used as a `WHERE` statement in each request. This should follow basic SQL syntax. Refer to this [MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/language-structure.html) for a full list of rules for writing MySQL statements.

#### Operators

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th>Operator</th>
        <th width='40%'>Description</th>
        <th width='40%'>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>=</td>
      <td>Equal</td>
      <td><code>WHERE ID = 445</code></td>
    </tr>
    <tr>
      <td>
        !=<br>
        <>
      </td>
      <td>Not equal</td>
      <td><code>WHERE ID <> 445</code></td>
    </tr>
    <tr>
      <td>
        &gt<br>
        &gt=
      </td>
      <td>
        Greater than<br>
        Greater than or equal to
      </td>
      <td><code>WHERE PRICE > 10000</code></td>
    </tr>
    <tr>
      <td>
        &lt<br>
        &lt=
      </td>
      <td>
        Less than<br>
        Less than or equal to
      </td>
      <td><code>WHERE PRICE > 10000</code></td>
    </tr>
    <tr>
      <td>IN(...)</td>
      <td>List of values</td>
      <td><code>WHERE ID IN(445, 600, 783)</code></td>
    </tr>
    <tr>
      <td>LIKE</td>
      <td>Pattern matching with wildcard characters (<code>%</code> and <code>&#95</code>)</td>
      <td><code>WHERE EMAIL LIKE '%@workato.com'</code></td>
    </tr>
    <tr>
      <td>BETWEEN</td>
      <td>Retrieve values with a range</td>
      <td><code>WHERE ID BETWEEN 445 AND 783</code></td>
    </tr>
    <tr>
      <td>
        IS NULL<br>
        IS NOT NULL
      </td>
      <td>
        NULL values check<br>
        Non-NULL values check
      </td>
      <td><code>WHERE NAME IS NOT NULL</code></td>
    </tr>
  </tbody>
</table>

#### Simple statements

String values must be enclosed in single quotes (`''`) and columns used must exist in the table.

A simple `WHERE` condition to filter rows based on values in a single column looks like this.

```sql
currency = 'USD'
```

If used in a **Select rows** action, this `WHERE` condition will return all rows that have the value 'USD' in the `currency` column. Just remember to wrap datapills with single quotes in your inputs.

![Using datapills in WHERE condition](~@img/mysql/use_datapill_in_where.png)
*Using datapills in `WHERE` condition*

Backticks (<code>&#96;&#96;</code>) in `WHERE` statements are for tables and columns identifiers. This is required when the identifier is a MySQL reserved keyword or contains special characters.

```sql
`currency` = 'USD'
```

In a recipe, remember to add backticks to the column identifiers.

![Using datapills in WHERE condition with backticks](~@img/mysql/use_datapill_in_where_backticks.png)
*Using datapills in `WHERE` condition backticks*

Double quotes (`""`) can also be used for string values but is less commonly accepted in other databases. For this reason, single quotes are used more widely than double quotes.

MySQL also expects `DATE` and `DATETIME` values to be single quoted. You can use double quotes for other column types.

```sql
created_date > '2018-03-01' and currency = "USD"
```

In a recipe, remember to use the appropriate quotes for each value.

![Using datapills in WHERE condition with mixed column types](~@img/mysql/use_datapill_in_where_mixed.png)
*Using datapills in `WHERE` condition with mixed column types*

#### Complex statements

Your `WHERE` condition can also contain subqueries. The following query can be used on the `users` table.

```sql
id in (select user_id from tickets where priority = 2)
```

When used in a **Delete rows** action, this will delete all rows in the `users` table where at least one associated row in the `tickets` table has a value of 2 in the `priority` column.

![Using datapills in WHERE condition with subquery](~@img/mysql/use_datapill_in_where_complex.png)
*Using datapills in `WHERE` condition with subquery*

#### Unique key

In all triggers and some actions, this is a required input. Values from this selected column are used to uniquely identify rows in the selected table.

As such, the values in the selected column must be unique. Typically, this column is the **primary key** of the table (e.g. `ID`).

When used in a trigger, this column must be incremental. This constraint is required because the trigger uses values from this column to look for new rows. In each poll, the trigger queries for rows with a unique key value greater than the previous greatest value.

Let's use a simple example to illustrate this behavior. We have a **New row trigger** that processed rows from a table. The **unique key** configured for this trigger is `ID`. The last row processed has `100` as it's `ID` value. In the next poll, the trigger will use `ID >= 101` as the condition to look for new rows.

Performance of a trigger can be improved if the column selected to be used as the **unique key** is indexed.

#### Sort column

This is required for **New/updated row triggers**. Values in this selected column are used to identify updated rows.

When a row is updated, the **Unique key** value remains the same. However, it should have it's **Sort column** updated to reflect the last updated time. Following this logic, Workato keeps track of values in this column together with values in the selected **Unique key** column. When a change in the **Sort column** value is observed, an updated row event will be recorded and processed by the trigger.

Let's use a simple example to illustrate this behavior. We have a **New/updated row trigger** that processed rows from a table. The **Unique key** and **Sort column** configured for this trigger is `ID` and `UPDATED_AT` respectively. The last row processed by the trigger has `ID` value of `100` and `UPDATED_AT` value of `2018-05-09 16:00:00.000000`. In the next poll, the trigger will query for new rows that satisfy either of the 2 conditions:
1. `UPDATED_AT > '2018-05-09 16:00:00.000000'`
2. `ID > 100 AND UPDATED_AT = '2018-05-09 16:00:00.000000'`

For MySQL, only **datetime** and **timestamp** column types can be used.
