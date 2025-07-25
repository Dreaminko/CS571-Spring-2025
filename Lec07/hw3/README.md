# CS571-S25 HW3: Badger Mart (React!)

Welcome back to Badger Mart! In this homework, you'll create a new version of Badger Mart using React to showcase today's featured item.

## Setup

The starter code provided to you was generated using [vite](https://vitejs.dev/guide/). Furthermore, [bootstrap](https://www.npmjs.com/package/bootstrap) and [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) have already been installed. In this directory, simply run...

```bash
npm install
npm run dev
```

Then, in a browser, open `localhost:5173`. You should *not* open index.html in a browser; React works differently than traditional web programming! When you save your changes, they appear in the browser automatically. I recommend using [Visual Studio Code](https://code.visualstudio.com/) to do your development work.

The two components you will be working with, `BadgerMart.jsx` and `FeaturedItem.jsx`, are located in the `components` folder.

## Debugging

This assignment has you fetching data from `https://cs571api.cs.wisc.edu/rest/s25/hw3/featured-item`, which changes on a daily basis. To see how your code reacts to any given day's feature, you can specify an optional query parameter of 'day', e.g. `https://cs571api.cs.wisc.edu/rest/s25/hw3/featured-item?day=Friday`. This is simply for your testing purposes.

For other debugging tips, please refer to the lecture slides.

## React Fundamentals

### 1. Fetch Featured Item

In `BadgerMart.jsx`, fetch today's featured item from `https://cs571api.cs.wisc.edu/rest/s25/hw3/featured-item` and save it to the `feature` state variable via its mutator function. **As a part of your fetch, `console.log` the response body data that you receive.**

![](_figures/step1.png)

### 2. Display Featured Item

In `FeaturedItem.jsx`, display the item's image, name, price, and description. You may use the name or description of the item as the `alt` tag of the image, but don't forget to specify it! Notice that the data has already been passed to this component from `BadgerMart.jsx`

![](_figures/step2.png)

### 3. Add Button

In `FeaturedItem.jsx`, add a button that says "Show Nutrition Facts". When the button is pressed, it should flip to saying "Hide Nutrition Facts". When the button is pressed again, it should flip back to "Show Nutrition Facts". It should be able to do this toggle indefinitely, e.g. each press of the button should flip what the button says.

**Hint:** You will likely need to add a state variable to track this.

![](_figures/step3.png)

### 4. Show Nutrition Facts

In `FeatureItem.jsx`, add a table of nutrition facts. This table should *only* be displayed while the button reads "Hide Nutrition Facts". When the button reads "Show Nutrition Facts" this table should be hidden.

The table should consist of a table header row of columns "Calories", "Fat", "Carbohydrates", and "Protein" and a table body of a single row that contains the featured item's macronutrients respectively.

Please note that while each featured item is guaranteed to have a `nutrition` object that contains `calories`, it is not always guaranteed to have an amount of `fat`, `carbohydrates`, or `protein`. You should assume that any missing macronutrients are "0g".

**Side Note:** If you are working on this project on Thursday, know that Thyme is a calorieless food that has no calories or macronutrients. You can try another day using the debugging tips at the start of this README!

![](_figures/step4.png)

### 5. Bootstrapify Featured Item

In `FeaturedItem.jsx`, turn your `div` into a React-Bootstrap `Card` component, turn your `button` into a React-Bootstrap `Button` component, turn your table into a React-Bootstrap `Table` component, and style elements so that they are aesthetically-pleasing. Consider making use of appropriate size and font weight, among other visual design principles, to guide the user's eye through the content of the component.

**Note:** Although we didn't cover React-Bootstrap's table, it is expected for you to read through and utilization [their documentation](https://react-bootstrap.github.io/docs/components/table).

**Hint:** Using a React-Bootstrap table is a simple change, don't overthink it!

There are no strict requirements to this step, other than to use `Card`, `Button`, and `Table` components as well as apply some sort of styling to some component(s).

![](_figures/step5.png)

## Done! 🥳

Congrats! Add, commit, and push your files to GitHub Classroom and paste your commit hash in the Canvas assignment.

---

# CS571-S25 作业3：Badger Mart（React版本！）

欢迎回到Badger Mart！在这次作业中，你将使用React创建一个新版本的Badger Mart来展示今日特色商品。

## 环境设置

提供给你的起始代码是使用[vite](https://vitejs.dev/guide/)生成的。此外，[bootstrap](https://www.npmjs.com/package/bootstrap)和[react-bootstrap](https://www.npmjs.com/package/react-bootstrap)已经安装完毕。在此目录中，只需运行...

```bash
npm install
npm run dev
```

然后，在浏览器中打开`localhost:5173`。你*不应该*在浏览器中打开index.html；React的工作方式与传统的Web编程不同！当你保存更改时，它们会自动出现在浏览器中。我推荐使用[Visual Studio Code](https://code.visualstudio.com/)进行开发工作。

你将要使用的两个组件`BadgerMart.jsx`和`FeaturedItem.jsx`位于`components`文件夹中。

## 调试

这个作业需要你从`https://cs571api.cs.wisc.edu/rest/s25/hw3/featured-item`获取数据，该数据每天都会变化。要查看你的代码对任何给定日期特色商品的反应，你可以指定一个可选的查询参数'day'，例如`https://cs571api.cs.wisc.edu/rest/s25/hw3/featured-item?day=Friday`。这仅用于你的测试目的。

其他调试技巧，请参考课程幻灯片。

## React基础

### 1. 获取特色商品

在`BadgerMart.jsx`中，从`https://cs571api.cs.wisc.edu/rest/s25/hw3/featured-item`获取今日特色商品，并通过其变更函数将其保存到`feature`状态变量中。**作为fetch的一部分，请`console.log`你收到的响应体数据。**

![](_figures/step1.png)

### 2. 显示特色商品

在`FeaturedItem.jsx`中，显示商品的图片、名称、价格和描述。你可以使用商品的名称或描述作为图片的`alt`标签，但不要忘记指定它！注意数据已经从`BadgerMart.jsx`传递到了这个组件。

![](_figures/step2.png)

### 3. 添加按钮

在`FeaturedItem.jsx`中，添加一个显示"Show Nutrition Facts"的按钮。当按钮被按下时，它应该翻转为"Hide Nutrition Facts"。当按钮再次被按下时，它应该翻转回"Show Nutrition Facts"。它应该能够无限期地进行这种切换，即每次按下按钮都应该翻转按钮显示的内容。

**提示：** 你很可能需要添加一个状态变量来跟踪这个状态。

![](_figures/step3.png)

### 4. 显示营养成分

在`FeatureItem.jsx`中，添加一个营养成分表格。这个表格*只*应该在按钮显示"Hide Nutrition Facts"时显示。当按钮显示"Show Nutrition Facts"时，这个表格应该被隐藏。

表格应该包含一个表头行，列名为"Calories"、"Fat"、"Carbohydrates"和"Protein"，以及一个表体，包含一行数据，分别显示特色商品的宏量营养素。

请注意，虽然每个特色商品都保证有一个包含`calories`的`nutrition`对象，但不总是保证有`fat`、`carbohydrates`或`protein`的数量。你应该假设任何缺失的宏量营养素都是"0g"。

**附注：** 如果你在周四进行这个项目，要知道百里香是一种无热量的食物，没有卡路里或宏量营养素。你可以使用本README开头的调试技巧尝试其他日期！

![](_figures/step4.png)

### 5. 为特色商品添加Bootstrap样式

在`FeaturedItem.jsx`中，将你的`div`转换为React-Bootstrap的`Card`组件，将你的`button`转换为React-Bootstrap的`Button`组件，将你的表格转换为React-Bootstrap的`Table`组件，并为元素添加样式使其美观。考虑适当使用大小和字体粗细等视觉设计原则，引导用户的眼睛浏览组件内容。

**注意：** 虽然我们没有涵盖React-Bootstrap的表格，但期望你阅读并使用[他们的文档](https://react-bootstrap.github.io/docs/components/table)。

**提示：** 使用React-Bootstrap表格是一个简单的更改，不要想得太复杂！

这一步没有严格的要求，除了使用`Card`、`Button`和`Table`组件以及对某些组件应用某种样式。

![](_figures/step5.png)

## 完成！🥳

恭喜！将你的文件添加、提交并推送到GitHub Classroom，然后在Canvas作业中粘贴你的提交哈希值。
