# 数据工具学习笔记：Python 与 SQL

状态：进行中  
创建日期：2026-06-26  
更新日期：2026-06-26  
保密级别：已脱敏  
来源或证据：2026-06-26 对话粘贴内容

## Python 学习笔记

已学习内容：

- 如何使用命令提示符运行 Python 环境。
- 基础数据类型和变量。
- 字符串和编码。

当前状态：

- 后续内容复杂，暂时没有继续深入。

后续建议：

1. 先围绕工作场景学习，例如读取 Excel、清洗表格、统计字段。
2. 不急于完整学习语法体系，优先用小任务建立正反馈。
3. 与 SQL 学习结合，用于后续业务数据分析。

## SQL 学习笔记

### 安装 MySQL

已学习安装 MySQL。

### 关系模型

1. 主键是关系表记录中的唯一标识。
2. 可通过一个表的 `id` 列链接到另一张表。
3. 关系分类：
   - 一对多
   - 多对多
   - 一对一

### 查询数据

#### 基本查询

```sql
SELECT * FROM <表名>;
```

#### 条件查询

```sql
SELECT * FROM students WHERE score >= 80 AND gender = 'M';
SELECT * FROM students WHERE score >= 80 OR gender = 'M';
SELECT * FROM students WHERE NOT class_id = 2;
SELECT * FROM students WHERE (score < 80 OR score > 90) AND gender = 'M';
```

#### 投影查询

```sql
SELECT id, score, name FROM students;
SELECT id, score points, name FROM students;
SELECT id, score points, name FROM students WHERE gender = 'M';
```

#### 排序

```sql
SELECT id, name, gender, score FROM students ORDER BY score;
SELECT id, name, gender, score FROM students ORDER BY score DESC;
SELECT id, name, gender, score FROM students ORDER BY score DESC, gender;
SELECT id, name, gender, score
FROM students
WHERE class_id = 1
ORDER BY score DESC;
```

#### 分页查询

```sql
SELECT id, name, gender, score
FROM students
ORDER BY score DESC
LIMIT 3 OFFSET 0;

SELECT id, name, gender, score
FROM students
ORDER BY score DESC
LIMIT 3 OFFSET 3;

SELECT id, name, gender, score
FROM students
ORDER BY score DESC
LIMIT 3 OFFSET 6;
```

要点：

- `LIMIT` 通常设定为 `pageSize`。
- `OFFSET` 从 0 开始。

#### 聚合查询

```sql
SELECT COUNT(*) FROM students;
SELECT COUNT(*) num FROM students;
SELECT COUNT(*) boys FROM students WHERE gender = 'M';
SELECT AVG(score) average FROM students WHERE gender = 'M';
SELECT COUNT(*) num FROM students GROUP BY class_id;
SELECT class_id, COUNT(*) num FROM students GROUP BY class_id;
SELECT class_id, gender, COUNT(*) num FROM students GROUP BY class_id, gender;
```

#### 多表查询

```sql
SELECT * FROM students, classes;

SELECT
    students.id sid,
    students.name,
    students.gender,
    students.score,
    classes.id cid,
    classes.name cname
FROM students, classes;

SELECT
    s.id sid,
    s.name,
    s.gender,
    s.score,
    c.id cid,
    c.name cname
FROM students s, classes c;

SELECT
    s.id sid,
    s.name,
    s.gender,
    s.score,
    c.id cid,
    c.name cname
FROM students s, classes c
WHERE s.gender = 'M' AND c.id = 1;
```

#### 连接查询

```sql
SELECT s.id, s.name, s.class_id, c.name class_name, s.gender, s.score
FROM students s
INNER JOIN classes c
ON s.class_id = c.id;
```

要点：

- `FROM` 确认主表。
- `INNER JOIN` 连接外表，选择两张表都存在的记录。
- `ON` 确认链接列。
- `RIGHT OUTER JOIN` 选择右表存在的记录。
- `LEFT OUTER JOIN` 选择左表存在的记录。
- `FULL OUTER JOIN` 选择两边都存在的记录。

### 修改数据

#### 插入数据

```sql
INSERT INTO students (class_id, name, gender, score) VALUES (2, '大牛', 'M', 80);

INSERT INTO students (class_id, name, gender, score) VALUES
  (1, '大宝', 'M', 87),
  (2, '二宝', 'M', 81),
  (3, '三宝', 'M', 83);
```

#### 更新数据

```sql
UPDATE students SET name='大牛', score=66 WHERE id=1;
UPDATE students SET name='小牛', score=77 WHERE id>=5 AND id<=7;
UPDATE students SET score=score+10 WHERE score<80;
```

#### 删除数据

```sql
DELETE FROM students WHERE id=1;
DELETE FROM students WHERE id>=5 AND id<=7;
DELETE FROM students;
```

注意：删除前最好先用 `SELECT` 测试 `WHERE` 条件。

### 实用 SQL 语句

```sql
REPLACE INTO students (id, class_id, name, gender, score)
VALUES (1, 1, '小明', 'F', 99);

INSERT INTO students (id, class_id, name, gender, score)
VALUES (1, 1, '小明', 'F', 99)
ON DUPLICATE KEY UPDATE name='小明', gender='F', score=99;

INSERT IGNORE INTO students (id, class_id, name, gender, score)
VALUES (1, 1, '小明', 'F', 99);

CREATE TABLE students_of_class1
SELECT * FROM students WHERE class_id=1;
```

## 后续练习方向

- 用真实业务表练习 `SELECT / WHERE / GROUP BY / JOIN`。
- 结合 BI 看板理解“活跃度、排名、过程管理”指标。
- 后续可以尝试用 SQL 复现一个简单客户分层或使用活跃度分析。
