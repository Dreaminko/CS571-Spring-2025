# CS571-S25 HW2: Badger Book

Welcome to Badger Book! In HW0, we collected JSON data about you; in this assignment, you will present this JSON data on a webpage: Badger Book. You'll fetch data from the API, present it on a webpage, and provide search functionality to speed up the introduction process!

## Important
 - For this assignment, you may *only* modify `app.js`. You may *not* modify `index.html`. You will implement the logic in `app.js` to fetch and filter student data to manipulate the DOM of `index.html`.
 - The screenshots below are just an example; the number of students and student data may change as data is refreshed.
 - The order of students is *not* guaranteed. It will occassionally change. This is okay; your solution does *not* need to preserve the order of students.


## Tasks

### 1. Fetching Data

Fetch the student data from `https://cs571api.cs.wisc.edu/rest/s25/hw2/students`. Note that this requires a `X-CS571-ID` header specifying your unique Badger ID. You may either use `CS571.getBadgerId()` (see HW1 for an example) or hardcode your Badger ID. After fetching this data, `console.log` the contents of this array.

![](_figures/step1.png)

### 2. Show # of Students

Use `document` to update the element with id `num-results` to be the number of students in the course. You can use the `innerText` attribute to change the text within `num-results`.

![](_figures/step2.png)

### 3. Displaying Students

Display each student on the webpage. You must use `createElement` and `appendChild` like the in-class exercise; you may **not** use `innerHTML` to insert the student data.

How you choose to display the student data is up to you, but you must display...
 - first & last name
 - major
 - number of credits
 - if they are from WI
 - their interests as an **unordered** (`ul`) list

The students should be displayed on page load.

**Note:** The students may not appear aligned in columns yet; you'll address this in the next step!

![](_figures/step3.png)

### 4. Responsive Design

Use [Bootstrap's grid system](https://getbootstrap.com/docs/5.3/layout/grid/) to make the display *explicitly responsive* so that...
 - 1 column of students is shown on `xs` and `sm` devices
 - 2 columns of students is shown on `md` devices
 - 3 columns of students is shown on `lg` devices
 - 4 columns of students is shown on `xl` or larger devices

You can re-size your browser window to test this.

**Hint:** You can modify each student's [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) to give it the responsive `col` classes.

![](_figures/step4.png)

### 5. Search Functionality
Implement search functionality so that a user may search by name, major, and interests when clicking the "search" button. After clicking "search", the only students that should be displayed are those that match the search criteria.

Be sure to put your search logic within `handleSearch`.

 The following are requirements of the search functionality...
 - search terms are case-insensitive, e.g. searching "cat" should yield results with "cAT"
 - search terms are substrings, e.g. "olo" should yield results with "color"
 - search terms are AND expressions, e.g. searching for a name of "Cole", a major of "Computer Science", and an interest of "coffee" should only yield Coles studying computer science who are interested in coffee
 - searching "john", "smith", "john smith", or "ohn smi", should all yield the person named "John Smith"
   - you can achieve this by concatenating each person's first and last name with a space; if the search name is a substring of this concatenation, it is a match
 - if any interest matches the search term, it should be considered a result, e.g. searching "bow" should yield people with interests in "bow hunting", "bowling", or "formal bowing"
 - if a search term is left blank it should not affect the results of the search
 - leading and trailing spaces of search terms should be ignored

Upon searching, `num-results` should be updated to the number of matching students.

Lastly, a user should be able to search many times! For example, if a user searches "Cole" followed by "John", accurate results should be shown for both searches. In order to achieve this, you may use `innerHTML` to *clear* the data; refer to the in-class exercise.

I would *encourage you* but not *require you* to use declarative over imperative programming.

**Note:** All students should be shown on the initial page load.

![](_figures/step5.png)

### 6. Similar Interests

When an interest is clicked, the search should be re-ran such that all students with that interest are returned. For example, if John Smith has interests of "Coffee" and "Programming" and a user clicks on the "Coffee" item, the search terms should be updated and *all* students with an interest in coffee (as a substring) are displayed.

Please clear the name and major input fields while doing this similar interest search; anyone with the selected interest (as a substring) should be displayed.

**Hint:** You can add "click" listeners to things other than buttons! For example, when generating the unordered list of interests for each student, you may include code like the following ...

```js
interestItemAnchorHTML.addEventListener("click", (e) => {
    const selectedText = e.target.innerText;
    // TODO update the search terms to search just for the
    //      selected interest, and re-run the search!
})
```

![](_figures/step6.png)

### Done! 🥳

Congrats! Add, commit, and push your files to GitHub Classroom and paste your commit hash in the Canvas assignment.

---

# CS571-S25 HW2: Badger Book

欢迎来到Badger Book！在HW0中，我们收集了关于你的JSON数据；在这个作业中，你将在网页上展示这些JSON数据：Badger Book。你将从API获取数据，在网页上展示，并提供搜索功能来加速介绍过程！

## 重要提示
 - 在这个作业中，你*只能*修改`app.js`。你*不能*修改`index.html`。你将在`app.js`中实现逻辑来获取和过滤学生数据，以操作`index.html`的DOM。
 - 下面的截图只是一个例子；学生数量和学生数据可能会随着数据刷新而改变。
 - 学生的顺序*不保证*。它会偶尔改变。这是正常的；你的解决方案*不需要*保持学生的顺序。

## 任务

### 1. 获取数据

从`https://cs571api.cs.wisc.edu/rest/s25/hw2/students`获取学生数据。注意这需要一个`X-CS571-ID`头，指定你的唯一Badger ID。你可以使用`CS571.getBadgerId()`（参见HW1的例子）或硬编码你的Badger ID。获取数据后，`console.log`这个数组的内容。

![](_figures/step1.png)

### 2. 显示学生数量

使用`document`更新id为`num-results`的元素为课程中的学生数量。你可以使用`innerText`属性来改变`num-results`内的文本。

![](_figures/step2.png)

### 3. 显示学生

在网页上显示每个学生。你必须像课堂练习一样使用`createElement`和`appendChild`；你**不能**使用`innerHTML`来插入学生数据。

如何选择显示学生数据由你决定，但你必须显示...
 - 名和姓
 - 专业
 - 学分数
 - 是否来自威斯康星州
 - 他们的兴趣作为**无序**（`ul`）列表

学生应该在页面加载时显示。

**注意：** 学生可能还没有在列中对齐；你将在下一步中解决这个问题！

![](_figures/step3.png)

### 4. 响应式设计

使用[Bootstrap的网格系统](https://getbootstrap.com/docs/5.3/layout/grid/)使显示*明确响应式*，使得...
 - 在`xs`和`sm`设备上显示1列学生
 - 在`md`设备上显示2列学生
 - 在`lg`设备上显示3列学生
 - 在`xl`或更大设备上显示4列学生

你可以重新调整浏览器窗口来测试这个。

**提示：** 你可以修改每个学生的[className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)来给它响应式的`col`类。

![](_figures/step4.png)

### 5. 搜索功能
实现搜索功能，使用户可以在点击"搜索"按钮时按姓名、专业和兴趣搜索。点击"搜索"后，只有匹配搜索条件的学生应该被显示。

确保将你的搜索逻辑放在`handleSearch`中。

搜索功能的以下要求...
 - 搜索词不区分大小写，例如搜索"cat"应该产生包含"cAT"的结果
 - 搜索词是子字符串，例如"olo"应该产生包含"color"的结果
 - 搜索词是AND表达式，例如搜索姓名"Cole"、专业"Computer Science"和兴趣"coffee"应该只产生学习计算机科学且对咖啡感兴趣的Cole
 - 搜索"john"、"smith"、"john smith"或"ohn smi"都应该产生名为"John Smith"的人
   - 你可以通过用空格连接每个人的名和姓来实现这一点；如果搜索名称是这个连接的子字符串，它就是匹配的
 - 如果任何兴趣匹配搜索词，它应该被认为是结果，例如搜索"bow"应该产生对"bow hunting"、"bowling"或"formal bowing"感兴趣的人
 - 如果搜索词留空，它不应该影响搜索结果
 - 搜索词的前导和尾随空格应该被忽略

搜索时，`num-results`应该更新为匹配学生的数量。

最后，用户应该能够多次搜索！例如，如果用户搜索"Cole"然后搜索"John"，两次搜索都应该显示准确的结果。为了实现这一点，你可以使用`innerHTML`来*清除*数据；参考课堂练习。

我*鼓励*但不*要求*你使用声明式而不是命令式编程。

**注意：** 初始页面加载时应显示所有学生。

![](_figures/step5.png)

### 6. 相似兴趣

当兴趣被点击时，搜索应该重新运行，使得所有具有该兴趣的学生被返回。例如，如果John Smith的兴趣是"Coffee"和"Programming"，用户点击"Coffee"项目，搜索词应该被更新，*所有*对咖啡（作为子字符串）感兴趣的学生都被显示。

在进行这种相似兴趣搜索时，请清除姓名和专业输入字段；任何具有所选兴趣（作为子字符串）的人都应该被显示。

**提示：** 你可以为按钮以外的东西添加"点击"监听器！例如，当为每个学生生成兴趣的无序列表时，你可以包含如下代码...

```js
interestItemAnchorHTML.addEventListener("click", (e) => {
    const selectedText = e.target.innerText;
    // TODO 更新搜索词以仅搜索
    //      选定的兴趣，并重新运行搜索！
})
```

![](_figures/step6.png)

### 完成！🥳

恭喜！将你的文件添加、提交并推送到GitHub Classroom，并在Canvas作业中粘贴你的提交哈希。
