# CS571-S25 HW4: Badger Book (React!)

Welcome back to Badger Book -- React Edition! In HW0, we collected JSON data about you; in HW2 we implemented Badger Book using vanilla HTML, CSS, and JS; and in this assignment, you will create Badger Book as a React App. Just like in past homeworks, you'll fetch data from the API, present it on a webpage, and provide search functionality to speed up the introduction process!

## Setup

The starter code provided to you was generated using [vite](https://vitejs.dev/guide/). Furthermore, [bootstrap](https://www.npmjs.com/package/bootstrap) and [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) have already been installed. In this directory, simply run...

```bash
npm install
npm run dev
```

Then, in a browser, open `localhost:5173`. You should *not* open index.html in a browser; React works differently than traditional web programming! When you save your changes, they appear in the browser automatically. I recommend using [Visual Studio Code](https://code.visualstudio.com/) to do your development work.

The two components you will be working on are located in the `components` folder. I have created the skeleton for `Student.jsx` and `Classroom.jsx`. The classroom component should fetch all of the data from the API and display them as student components.

## Important
 - The screenshots below are just an example; the number of students and student data will change from semester to semester.
 - The order of students is *not* guaranteed. It will occassionally change. This is okay; your solution does *not* need to preserve the order of students.
 - Each student has an `id` which is guaranteed to be unique.

Finally, clicking on an interest to search for it is *not* a requirement of this homework. We will have a different set of requirements instead, like auto-searching, resetting search, and pagination.

## Tasks

### 1. Fetch Student Data

In `Classroom.jsx`, create a React state variable that will hold the array of student data. Then, fetch the student data from `https://cs571api.cs.wisc.edu/rest/s25/hw4/students` *on page load* and save it to this React state variable. Note three things...
 1. You'll likely need to use the React hooks `useEffect` and `useState`.
 2. This is the same data from the HW2 API *except* an additional unique "id" has been added to each student.
 3. This request requires a `X-CS571-ID` header specifying your unique Badger ID.
 
After fetching this data, `console.log` the contents of this array.

**Hint:** Are you getting a [429 HTTP code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) from the server? Check your code for an infinite loop! You will be automatically locked out of the API for up to 1 minute.

![](_figures/step1.png)

### 2. Display # of Students

In `Classroom.jsx`, display the number of students returned below the search form; for example...

```
There are NUMBER student(s) matching your search.
```

![](_figures/step2.png)

### 3. Displaying Student Names

In `Classroom.jsx`, display a `Student` component for each student, passing down props of the student's data. You must display the student's data using the `Student` component.

Furthermore, make sure to specify a unique `key` for each student; you should use the student's ID as the key. You should make sure that you are **not** getting an error saying `each child in a list should have a unique "key" prop.` in your browser's console log, you will lose points!

![](_figures/step3.png)

### 4. Formatting Student Data

This "works"... but there is a lot of wasted space on large devices. In `Classroom.jsx`, use [React-Bootstrap's grid system](https://react-bootstrap.github.io/layout/grid/) so that...
 - 1 column of students is shown on `xs` and `sm` devices
 - 2 columns of students is shown on `md` devices
 - 3 columns of students is shown on `lg` devices
 - 4 columns of students is shown on `xl` devices

You can re-size your browser window to test this.

![](_figures/step4.png)

### 5. Add Other Student Data

There's more to a student than just their name! Modify `Student.jsx` to display all of the other information about a student (except for their ID). How you choose to do this is up to you, but you must display...
 - first & last name
 - major
 - number of credits
 - if they are from WI
 - their interests as an **unordered list** (`ul`)


Furthermore, make sure to specify a unique `key` for each interest; you can assume that each interest is unique per person. You should make sure that you are **not** getting an error saying `each child in a list should have a unique "key" prop.` in your browser's console log, you will lose points!

![](_figures/step5.png)

### 6. Search Functionality

With all of the data being displayed, we need to provide the user with a way to narrow down their results. Implement search functionality so that a user may search by name, major, and interests with results appearing **as they type**  -- *there is no search button*. Only students that match the typed search criteria should be displayed.

**Hint**: You will likely need to create a variable containing a list of searched students *derived from* the complete list of students.

How you implement this in React is up to you, but the following are requirements of the search functionality **(these are the same as in HW2)**...
 - search terms are case-insensitive, e.g. searching "cat" should yield results with "cAT"
 - search terms are substrings, e.g. "olo" should yield results with "color"
 - search terms are AND expressions, e.g. searching for a name of "Cole", a major of "Computer Science", and an interest of "coffee" should only yield Coles studying computer science who are interested in coffee
 - searching "john", "smith", "john smith", or "ohn smi", should all yield the person named "John Smith"
   - you can achieve this by concatenating each person's first and last name with a space; if the search name is a substring of this concatenation, it is a match
 - if any interest matches the search term, it should be considered a result, e.g. searching "bow" should yield people with interests in "bow hunting", "bowling", or "formal bowing".
 - if a search term is left blank it should not affect the results of the search
 - leading and trailing spaces of search terms should be ignored


I would *encourage you* but not *require you* to use declarative over imperative programming.

**Important:** The displayed number of results (see Step 2) should also be updated to reflect the number of students found.

![](_figures/step6.png)

### 7. Reset Search

In `Classroom.jsx`, add an `onClick` handler so that when the user clicks the "Reset Search" button, the search term fields should be cleared and all students should be displayed.

**Important:** The displayed number of results (see Step 2) should also be updated to reflect the total number of students.

![](_figures/step7.png)

### 8. Basic Pagination

[Implement pagination using Bootstrap](https://react-bootstrap.netlify.app/docs/components/pagination/).

Up to 24 results should be shown per page. Allow the user to switch between pages via numbered paginated items at the bottom of the page (e.g. 1, 2, 3, 4, etc.). Indicate which page the user is currently on by marking that paginated item as active. When any of the search terms are updated, or if the search is reset, return the user to Page 1.

**Note**: You should *dynamically* create the `Pagination.Item` components. As the number of search results update, so should the number of `Pagination.Item`. Make sure to specify a unique `key` for each `Pagination.Item`.

![](_figures/step8.png)

### 9. Next & Previous Buttons

In addition to the numbered paginated items, add "Previous" and "Next" buttons. The "Previous" button should be disabled if the user is on the first page, and the "Next" button should be disabled if the user is on the last page. If there are no results, both buttons should be disabled.

![](_figures/step9.png)

### Done! 🥳

Congrats! Add, commit, and push your files to GitHub Classroom and paste your commit hash in the Canvas assignment.

---

# CS571-S25 HW4: Badger Book (React!)

欢迎回到 Badger Book -- React 版本！在 HW0 中，我们收集了关于您的 JSON 数据；在 HW2 中我们使用原生 HTML、CSS 和 JS 实现了 Badger Book；在这个作业中，您将创建一个 React App 版本的 Badger Book。就像在过去的作业中一样，您将从 API 获取数据，在网页上呈现它，并提供搜索功能来加速介绍过程！

## 设置

提供给您的起始代码是使用 [vite](https://vitejs.dev/guide/) 生成的。此外，[bootstrap](https://www.npmjs.com/package/bootstrap) 和 [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) 已经安装好了。在这个目录下，只需运行...

```bash
npm install
npm run dev
```

然后在浏览器中打开 `localhost:5173`。您应该*不要*在浏览器中直接打开 index.html；React 的工作方式与传统的网页编程不同！当您保存更改时，它们会自动出现在浏览器中。我推荐使用 [Visual Studio Code](https://code.visualstudio.com/) 进行开发工作。

您将要工作的两个组件位于 `components` 文件夹中。我已经为 `Student.jsx` 和 `Classroom.jsx` 创建了框架。classroom 组件应该从 API 获取所有数据并将它们显示为 student 组件。

## 重要提醒
 - 下面的截图只是示例；学生数量和学生数据会因学期而异。
 - 学生的顺序*不*保证。它会偶尔改变。这是可以的；您的解决方案*不*需要保持学生的顺序。
 - 每个学生都有一个保证唯一的 `id`。

最后，点击兴趣来搜索它*不是*这次作业的要求。我们将有一套不同的要求，比如自动搜索、重置搜索和分页。

## 任务

### 1. 获取学生数据

在 `Classroom.jsx` 中，创建一个 React 状态变量来保存学生数据数组。然后，在*页面加载时*从 `https://cs571api.cs.wisc.edu/rest/s25/hw4/students` 获取学生数据并将其保存到这个 React 状态变量中。注意三点...
 1. 您可能需要使用 React hooks `useEffect` 和 `useState`。
 2. 这与 HW2 API 的数据相同，*除了*每个学生都添加了一个额外的唯一"id"。
 3. 此请求需要一个指定您唯一 Badger ID 的 `X-CS571-ID` 头。
 
获取此数据后，`console.log` 这个数组的内容。

**提示：** 您从服务器收到了 [429 HTTP 代码](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) 吗？检查您的代码是否有无限循环！您将被自动锁定在 API 之外长达 1 分钟。

![](_figures/step1.png)

### 2. 显示学生数量

在 `Classroom.jsx` 中，在搜索表单下方显示返回的学生数量；例如...

```
有 NUMBER 名学生符合您的搜索条件。
```

![](_figures/step2.png)

### 3. 显示学生姓名

在 `Classroom.jsx` 中，为每个学生显示一个 `Student` 组件，传递学生数据的 props。您必须使用 `Student` 组件显示学生的数据。

此外，确保为每个学生指定一个唯一的 `key`；您应该使用学生的 ID 作为 key。您应该确保在浏览器的控制台日志中**没有**收到说 `each child in a list should have a unique "key" prop.` 的错误，否则您将失分！

![](_figures/step3.png)

### 4. 格式化学生数据

这"可以工作"...但在大型设备上有很多浪费的空间。在 `Classroom.jsx` 中，使用 [React-Bootstrap 的网格系统](https://react-bootstrap.github.io/layout/grid/)，使得...
 - 在 `xs` 和 `sm` 设备上显示 1 列学生
 - 在 `md` 设备上显示 2 列学生
 - 在 `lg` 设备上显示 3 列学生
 - 在 `xl` 设备上显示 4 列学生

您可以调整浏览器窗口大小来测试这一点。

![](_figures/step4.png)

### 5. 添加其他学生数据

学生不仅仅有姓名！修改 `Student.jsx` 以显示学生的所有其他信息（除了他们的 ID）。您如何选择这样做取决于您，但您必须显示...
 - 姓和名
 - 专业
 - 学分数
 - 是否来自威斯康星州
 - 他们的兴趣作为**无序列表** (`ul`)

此外，确保为每个兴趣指定一个唯一的 `key`；您可以假设每个兴趣对每个人来说都是唯一的。您应该确保在浏览器的控制台日志中**没有**收到说 `each child in a list should have a unique "key" prop.` 的错误，否则您将失分！

![](_figures/step5.png)

### 6. 搜索功能

显示了所有数据后，我们需要为用户提供缩小结果范围的方法。实现搜索功能，使用户可以按姓名、专业和兴趣进行搜索，结果**在他们输入时**出现 -- *没有搜索按钮*。只有符合输入搜索条件的学生才应该显示。

**提示**：您可能需要创建一个包含从完整学生列表*派生的*搜索学生列表的变量。

如何在 React 中实现这一点取决于您，但搜索功能的以下要求**(这些与 HW2 中的相同)**...
 - 搜索词不区分大小写，例如搜索"cat"应该产生包含"cAT"的结果
 - 搜索词是子字符串，例如"olo"应该产生包含"color"的结果
 - 搜索词是 AND 表达式，例如搜索姓名"Cole"、专业"Computer Science"和兴趣"coffee"应该只产生研究计算机科学并对咖啡感兴趣的 Cole
 - 搜索"john"、"smith"、"john smith"或"ohn smi"，都应该产生名为"John Smith"的人
   - 您可以通过用空格连接每个人的姓和名来实现这一点；如果搜索名称是此连接的子字符串，则它是匹配的
 - 如果任何兴趣匹配搜索词，它应该被视为结果，例如搜索"bow"应该产生对"bow hunting"、"bowling"或"formal bowing"感兴趣的人。
 - 如果搜索词留空，它不应该影响搜索结果
 - 搜索词的前导和尾随空格应该被忽略

我*鼓励*但不*要求*您使用声明式而非命令式编程。

**重要：** 显示的结果数量（见步骤 2）也应该更新以反映找到的学生数量。

![](_figures/step6.png)

### 7. 重置搜索

在 `Classroom.jsx` 中，添加一个 `onClick` 处理程序，这样当用户点击"Reset Search"按钮时，搜索词字段应该被清除，所有学生都应该显示。

**重要：** 显示的结果数量（见步骤 2）也应该更新以反映学生总数。

![](_figures/step7.png)

### 8. 基本分页

[使用 Bootstrap 实现分页](https://react-bootstrap.netlify.app/docs/components/pagination/)。

每页应显示最多 24 个结果。允许用户通过页面底部的编号分页项目（例如 1、2、3、4 等）在页面之间切换。通过将该分页项目标记为活动来指示用户当前所在的页面。当任何搜索词更新时，或者如果搜索被重置，将用户返回到第 1 页。

**注意**：您应该*动态*创建 `Pagination.Item` 组件。随着搜索结果数量的更新，`Pagination.Item` 的数量也应该更新。确保为每个 `Pagination.Item` 指定一个唯一的 `key`。

![](_figures/step8.png)

### 9. 下一页和上一页按钮

除了编号的分页项目，还要添加"Previous"和"Next"按钮。如果用户在第一页，"Previous"按钮应该被禁用，如果用户在最后一页，"Next"按钮应该被禁用。如果没有结果，两个按钮都应该被禁用。

![](_figures/step9.png)

### 完成！🥳

恭喜！添加、提交并推送您的文件到 GitHub Classroom，并在 Canvas 作业中粘贴您的提交哈希。
