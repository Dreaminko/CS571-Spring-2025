# CS571-S25 HW1: Badger Mart

Welcome to Badger Mart! For this assignment, you will be completing the functionality of the `.html`, `.css`, and `.js` files. You will also be using our first API. 

## JavaScript Essentials

All `.html`, `.css`, and `.js` files are located in the `badger-mart` folder. You can load any of the webpages in a web browser by directly double-clicking on the file. I recommend using [Visual Studio Code](https://code.visualstudio.com/) to do your development work.

**Do not use Live Server for the purposes of this assignment.**

### 0. Featured Item
To get started, let's make sure that you have a working Badger ID! When you open `index.html`, you should see a message that says "Please enter your Badger ID to continue...". **Please enter your Badger ID in the prompt window, press OK, then refresh the webpage.**

If you see today's featured sale at the top of the homepage, you are all good! e.g...

```
Today's sale is Molasses for $3.99, which can only be asked for at the service desk!
```


![](_figures/step0.png)

*Note the special rotates daily, so you may see Sunflower Seeds, Molasses, Tuna, Weetabix, Thyme, Fries (Frozen), or Salmon depending on the day!*

#### Troubleshooting Badger IDs

Not sure what your Badger ID is? Search your email for `CS571 S25 New Badger ID` sent by `ctnelson2@wisc.edu`.

Never received a Badger ID? [You can self-issue one here.](https://cs571api.cs.wisc.edu/ui/auth) *Please note that it may take **up to a minute** for a new Badger ID to begin working!*

Need to change your Badger ID? There's a cheat code for that! Press `Enter` `Enter` `Up Arrow` `Up Arrow` `Down Arrow` `Down Arrow` within the BadgerMart webpage to delete your Badger ID, then refresh the page. Alternatively, you can delete your session and local storage from your browser settings.

Still have questions? Please search for or make a Piazza post ASAP!


### 1. About Us Page

The `about-us.html` page is currently empty. Make a *plausible-looking* About Us page using text generated from [lorem ipsum](https://www.lipsum.com/) (be sure to cite your source with a comment!). On this page, you should use multiple heading levels, **bold** and *italic* text (remember to use the locale-appropriate tags!), and insert the image from `assets/bagel.png`. The image must be accessible, so be sure to include an `alt` tag describing what it is! There are no other strict requirements for this section, see the screenshot below for an example.

![](_figures/step1.png)

### 2. Button Styling

All of our buttons look the same! However, if you look at the `.html` files, we do distinguish between CSS classes `primary-button` and `secondary-button`. Using `styles.css`, give `primary-button` and `secondary-button` three different CSS attributes (e.g. change the `background-color`, `border`, `padding`, or any other CSS attributes of each). Again, there are no other strict requirements for this section, see the screenshot below for an example.

![](_figures/step2.png)

### 3. Jobs Page

There is a webpage, `jobs.html`, which isn't being shown in our navigation bar. Add a "Jobs" link to each navigation bar in Badger Mart between the "Order" and "Contact" links. You will need to edit all of the other `.html` files in order to do this.

Furthermore, add the `primary` styling to "Apply" button. For now, the button does not need to do anything; we will re-visit this in Step 8.

![](_figures/step3.png)

### 4. Getting State Tax

In `order.js`, implement the function `getSalesTaxRateForState`.

When this function is properly implemented, you can get the sales tax for a state by using the "What is my sales tax rate?" 

**Hint:** Use the `SALES_TAX` object to get the tax rate for a particular state.

![](_figures/step4.png)

### 5. Calculating Subtotal.

In `order.js`, implement the function `calculateSubtotal`.

Use a `for` loop over the `ITEMS` array in combination with `document.getElementById`. You may *not* hardcode the names of the items! Hardcoding will cause you to lose points.

This function should calculate the sum cost of all items ordered. When this function is properly implemented, you can calculate your subtotal using the "Get Subtotal" button in the browser.

For example, ordering two apples, three bagels, and one coconut should cost $5.50.

Assume inputs will always be positive, whole numbers.

**Hint:** You can get the quantity and price of an item by doing...

```js
const quantity = parseInt(document.getElementById("ITEMNAME-quantity").value);
const price = parseFloat(document.getElementById("ITEMNAME-price").innerText);
```

![](_figures/step5.png)

### 6. Calculating Sales Tax

In `order.js`, implement the function `calculateSalesTax`. While it's true that most groceries aren't taxed in the United States, we'll assume that every item is taxable.

You must apply the sales tax rate from `getSalesTaxRateForState` to the amount from `calculateSubtotal`. Use the `roundMoney` function to round to the nearest penny.

When this function is properly implemented, you can calculate your sales tax by using the "Get Sales Tax" button in the browser. 

For example, when ordering two apples, three bagels, and one coconut ($5.50), the Alabama (AL) sales tax should be $0.22 while the Florida (FL) sales tax should be $0.33.

![](_figures/step6.png)

### 7. Completing Order

In `order.js` add an event listener that waits for the "Checkout" button to be pressed. When the checkout button is pressed, alert the user what their total bill is (using `calculateSubtotal` and `calculateSalesTax`).

![](_figures/step7.png)

### 8. Applying for a Job

Finally, in `jobs.js`, implement the function `submitApplication`.

When this function is properly implemented, you should alert the user "Thank you for applying to be a JOB!", where JOB is their selected job (cashier, stocker, or janitor). If no job is selected, you should alert the user "Please select a job!"

**Hint:** You can get the list of radio input elements by using `document.getElementsByName('job')`. Each radio element will have a  `checked` property (whether or not the element is selected) and a `value` property (what the name of the radio button is).

You may *not* hardcode the names of the jobs! Hardcoding will cause you to lose points.

![](_figures/step8.png)

### Done! 🥳
Congrats! Add, commit, and push your files to GitHub Classroom and paste your commit hash in the Canvas assignment.

---

# CS571-S25 作业1：Badger Mart（中文翻译）

欢迎来到 Badger Mart！在这个作业中，您将完成 `.html`、`.css` 和 `.js` 文件的功能。您还将使用我们的第一个 API。

## JavaScript 基础

所有的 `.html`、`.css` 和 `.js` 文件都位于 `badger-mart` 文件夹中。您可以通过直接双击文件在网页浏览器中加载任何网页。我推荐使用 [Visual Studio Code](https://code.visualstudio.com/) 进行开发工作。

**请不要在此作业中使用 Live Server。**

### 0. 精选商品
首先，让我们确保您有一个可用的 Badger ID！当您打开 `index.html` 时，应该看到一个消息"Please enter your Badger ID to continue..."。**请在提示窗口中输入您的 Badger ID，按确定，然后刷新网页。**

如果您在主页顶部看到今日精选促销，那就没问题了！例如...

```
Today's sale is Molasses for $3.99, which can only be asked for at the service desk!
```

![](_figures/step0.png)

*注意特价商品每日轮换，您可能会看到葵花籽、糖蜜、金枪鱼、麦片、百里香、冷冻薯条或三文鱼，具体取决于当天！*

#### Badger ID 故障排除

不确定您的 Badger ID 是什么？在您的电子邮件中搜索由 `ctnelson2@wisc.edu` 发送的 `CS571 S25 New Badger ID`。

从未收到 Badger ID？[您可以在这里自行申请。](https://cs571api.cs.wisc.edu/ui/auth) *请注意，新的 Badger ID 可能需要**最多一分钟**才能开始工作！*

需要更改您的 Badger ID？有个密技！在 BadgerMart 网页中按 `Enter` `Enter` `Up Arrow` `Up Arrow` `Down Arrow` `Down Arrow` 来删除您的 Badger ID，然后刷新页面。或者，您可以从浏览器设置中删除会话和本地存储。

还有问题？请尽快在 Piazza 上搜索或发帖！

### 1. 关于我们页面

`about-us.html` 页面目前是空的。使用从 [lorem ipsum](https://www.lipsum.com/) 生成的文本制作一个*看起来可信的*关于我们页面（确保用注释引用您的来源！）。在此页面上，您应该使用多个标题级别、**粗体**和*斜体*文本（记住使用适合地区的标签！），并插入来自 `assets/bagel.png` 的图片。图片必须是可访问的，所以确保包含描述图片内容的 `alt` 标签！此部分没有其他严格要求，请参考下面的截图示例。

![](_figures/step1.png)

### 2. 按钮样式

我们所有的按钮看起来都一样！但是，如果您查看 `.html` 文件，我们确实区分了 CSS 类 `primary-button` 和 `secondary-button`。使用 `styles.css`，为 `primary-button` 和 `secondary-button` 添加三个不同的 CSS 属性（例如更改 `background-color`、`border`、`padding` 或其他任何 CSS 属性）。同样，此部分没有其他严格要求，请参考下面的截图示例。

![](_figures/step2.png)

### 3. 工作页面

有一个网页 `jobs.html` 没有显示在我们的导航栏中。在 Badger Mart 的每个导航栏中，在"Order"和"Contact"链接之间添加一个"Jobs"链接。您需要编辑所有其他的 `.html` 文件来完成此操作。

此外，为"Apply"按钮添加 `primary` 样式。目前，按钮不需要做任何事情；我们将在第8步中重新访问这个功能。

![](_figures/step3.png)

### 4. 获取州税

在 `order.js` 中，实现函数 `getSalesTaxRateForState`。

当此函数正确实现后，您可以通过使用"What is my sales tax rate?"来获取州的销售税。

**提示：** 使用 `SALES_TAX` 对象来获取特定州的税率。

![](_figures/step4.png)

### 5. 计算小计

在 `order.js` 中，实现函数 `calculateSubtotal`。

结合使用 `document.getElementById` 对 `ITEMS` 数组使用 `for` 循环。您*不得*硬编码商品名称！硬编码将导致扣分。

此函数应计算所有订购商品的总成本。当此函数正确实现后，您可以使用浏览器中的"Get Subtotal"按钮计算小计。

例如，订购两个苹果、三个贝果和一个椰子应该花费 $5.50。

假设输入始终为正整数。

**提示：** 您可以通过以下方式获取商品的数量和价格...

```js
const quantity = parseInt(document.getElementById("ITEMNAME-quantity").value);
const price = parseFloat(document.getElementById("ITEMNAME-price").innerText);
```

![](_figures/step5.png)

### 6. 计算销售税

在 `order.js` 中，实现函数 `calculateSalesTax`。虽然在美国大多数杂货确实不征税，但我们假设每个商品都应纳税。

您必须将来自 `getSalesTaxRateForState` 的销售税率应用到来自 `calculateSubtotal` 的金额上。使用 `roundMoney` 函数四舍五入到最近的分。

当此函数正确实现后，您可以使用浏览器中的"Get Sales Tax"按钮计算销售税。

例如，当订购两个苹果、三个贝果和一个椰子（$5.50）时，阿拉巴马州（AL）的销售税应该是 $0.22，而佛罗里达州（FL）的销售税应该是 $0.33。

![](_figures/step6.png)

### 7. 完成订单

在 `order.js` 中添加一个事件监听器，等待"Checkout"按钮被按下。当结账按钮被按下时，提醒用户他们的总账单是多少（使用 `calculateSubtotal` 和 `calculateSalesTax`）。

![](_figures/step7.png)

### 8. 申请工作

最后，在 `jobs.js` 中，实现函数 `submitApplication`。

当此函数正确实现后，您应该提醒用户"Thank you for applying to be a JOB!"，其中 JOB 是他们选择的工作（收银员、理货员或清洁工）。如果没有选择工作，您应该提醒用户"Please select a job!"

**提示：** 您可以通过使用 `document.getElementsByName('job')` 获取单选按钮输入元素列表。每个单选元素都有一个 `checked` 属性（元素是否被选中）和一个 `value` 属性（单选按钮的名称）。

您*不得*硬编码工作名称！硬编码将导致扣分。

![](_figures/step8.png)

### 完成！🥳
恭喜！将您的文件添加、提交并推送到 GitHub Classroom，并在 Canvas 作业中粘贴您的提交哈希值。