import React from 'react';

function TopicsPage() {
    return (
        <>
        <h2> Web Development Concepts</h2>
            <nav id = "web-development-concepts"> 
                <a href="#about-web-servers">About Web Servers</a>
                <a href="#frontend-design">Frontend Design</a>
                <a href="#optimizing-images">Optimizing Images</a>
                <a href="#cascading-stylesheets">Cascading Stylesheets</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javascript">JavaScript</a>
                <a href="#dom">DOM</a>
            </nav>
            <article id = "about-web-servers"> 
                <h3> About Web Servers </h3>
                <p> I created this page by first, downloading VS Code 2, and adding the 
                    LanguageTool add-on to help with spelling and grammar. Then, I opened this file
                    and selected the HTML sample tag. I took the boilerplate keystroke in VS Code to build this file, and then I added it in the heading of
                    this file. Also, index.html is such an important name since it is the most common name for a default page and is used when no other page is specified when a 
                    visitor requests the site.
                </p>
                <p>
                    The browser inspector shows index file properties once the network is opened. Then, I searched into the network property and saw the different parts that are related to the 
                    HTTP request. The request line shows the request method, which in this case is GET. Then, the content type is text/html since HTML is the language that is requested. Then,
                    the status code for the index.html is 200, which means that the status is OK. The content type is text/html because that is the program written.
                    Then, the main.js and main.css files do not have a status because both JS and CSS are not implemented on this website, as it is running in just HTML. 
                </p>
                <p>
                    The index.html file on the web server shows a bit differently than the local browser. First, the provisional headers are gone, and there is a more
                    detailed view of the request and responses. I am able to determine that GET is HTTP/1.1 200 OK and the content type is text/html. There is no-cache and the User-Agent is 
                    Mozilla/5.0. I see that the host is web.engr.oregonstate.edu and that there is no post.
            
                </p>
                <p>
                    The favicon.ico file is the picture icon that comes with the website. The differences I spot is that there is HTML is not accepted, and only elements that start with 'image' are included.
                    The age is 1, which is very interesting. I noticed a different content-type as well, which is now image/vnd.microsoft.icon. Lastly, I noticed that there is a Via under response filter. 
                    The Via is used for tracking message forwards, avoiding request loops, and identifying protocol capabilities among senders.
                    Finally, if you take a look at main.js and main.css, there is a 404 status code, which means the file cannot be found. This is because JS and CSS are not allowed.
                </p>
                <p>
                    In the URL, the schema is HTTPS. The subdomain is web.engr. The domain is oregonstate.edu. There is no server port number shown in the URL, but in the request the number is 443.
                    The path to resource is ~marm, since this is the path to the a1-marm folder which is the resource The link to resource is a1-marm, as in there, there is 
                    the index.html file that has all the code written out. The link to resource can change depending on what link the user wants in the path. The resource includes the folder and file names, which were listed
                    before. 
                </p>
            </article>
            <article id = "frontend-design">
                <h3> Frontend Design </h3>
                <p> The concept of frontend design is to build the part the user interfaces within a website. The most important part about frontend design is making the experience appropriate for the user.
                     In the webpage on the frontend side, there is a visual design component, which includes a consistent color scheme, a photo, icon and illustration theme, and a logical navigation system. 
                     There is also a GUI (Graphical User Interface) and an interactive experience, so the user can enjoy the website.
                </p>
                    <p> There are 5 different E's in usability engineering: </p>
                    <dl>
                        <dt><strong>1. Effective</strong></dt>
                        <dd> Helps users to meet their goals </dd>

                        <dt><strong>2. Efficient</strong></dt>
                        <dd> Quicker experience for users to complete tasks  </dd>

                        <dt><strong>3. Easy to navigate</strong></dt>
                        <dd> Designed so no matter the experience, the user can navigate with ease </dd>

                        <dt><strong>4. Error-free</strong></dt>
                        <dd> Avoiding issues related to accessibility and availability. Learning how users create common errors  </dd>

                        <dt><strong>5. Enjoyable</strong></dt>
                        <dd> The user finding satisfaction through the site filling the needs of them  </dd>
                    </dl>
                    <p>
                        The purpose of having page layout tags is to break up the flow of the content and are displayed by browsers. Some examples of page-layout as are header, nav, main, section of articles, asides and a footer. 
                    Each of them break up the page and somewhat help the user experience by sectioning off content and breaks content into a block for a line break. The header, nav and main are all self-explanatory, but the section of articles
                    has articles in the section, and they can be either paragraphs or lists. Then, the article denotes a topic, and the aside, figure and blockquote end the body. The footer holds legal information. 
                    All of these are important to the user so they can see how a webpage is sectioned off. </p>
                <p>
                    Anchors link from page to page by using the anchor tab a. In order for this process to work, an href attribute needs present. When it is present, the enter key when focused on the a element should be activated. 
                    The content between the opening and closing a tags should be able to describe when someone clicks into the site. Also, to link to an element, adding the id attribute after a href= is good. Finally,
                    adding the id at the end of the URL works, preceded by a hash symbol. 
                </p>
            </article>
            <article id = "optimizing-images">
                <h3> Optimizing Images </h3>
                <p> The <strong> 6 major specifications</strong> of images of the web are:</p>
                <dl>
                    <dt><strong>1. Descriptive file name</strong></dt>
                    <dd>File names include the who, what, when and where, being descriptive yet concise to improve search engine optimization (SEO).</dd>
                    
                    <dt><strong>2. Small file size</strong></dt>
                    <dd>Reducing file sizes to as small as possible for quicker load times.</dd>

                    <dt><strong>3. Exact dimensions</strong></dt>
                    <dd>Cropping and reducing images sizes to fit dimensions of space in webpage.</dd>

                    <dt><strong>4. Correct file format</strong></dt>
                    <dd>.JPG: Online Photos, .GIF: Line-art images (logos and icons), 8 Bit .PNG: Also Line-art images sometimes, 24-Bit .PNG: Graphics with true transparency</dd>


                    <dt><strong>5. Reduced Resolution</strong></dt>
                    <dd>Monitors between 72 or 300+ pixels/inch. But much higher resolutions are available, so providing multiple image sizes for each becoming a standard.</dd>

                    <dt><strong>6. Color Mode</strong></dt>
                    <dd>RBG for .PNG, .JPG, .SVG, and .WebP, and Indexed for .GIF</dd>
                </dl>
                <p>
                    For photos, the file formats that are most appropriate are JPG and PNG. Then for line-art, GIF works best.
                </p>
            </article>
            <article id = "cascading-stylesheets">
                <h3> Cascading Stylesheets </h3>
                <p> Main reason to incorporate stylesheets in websites and apps is to customize the appearance of the website. Stylesheets redifine how structure,
                    content and components behave to improve usability, readability, legibility to adhere to brand requirements. Whereas HTML just focuses on basic structure and 
                    organized content. </p>

                  <p> There are 5 ways to incorporate styles in CSS: </p>
                  <dl>
                    <dt> 1. External CSS </dt>
                    <dd> A stylesheet file is linked in the global head area such as &lt;link rel="stylesheet" href="CSSFileName.css"&gt;.</dd>

                    <dt> 2. Embedded within a &lt;style&gt;&lt;style&gt; tag</dt>
                    <dd> An example is &lt;style&gt; &lt;style&gt;</dd>

                    <dt> 3. Inline within element using attribute and value </dt>
                    <dd> Such as &lt;h1 style="color:olive"&gt; </dd>

                    <dt> 4. In JS template literals: </dt>
                    <dd> const orangeHeading = styled.h1 color: orange; ;</dd>

                    <dt> 5. Natural JS </dt>
                    <dd> document.getElementsByTagName('h1').style.color = 'orange';</dd>
                  </dl>
            </article>
            <article id = "forms">
                <h3> Form Usability </h3>
                <p> There are 6 major goals of accessible forms: </p>
                <ul>
                    <li><strong>By providing clear instructions</strong>  above the forms and labels. It is wise to 
                        use placeholder values are only helpful for users vision</li>
                    
                    <li><strong>Letting users know why</strong> you are gathering data and<strong> the fields that are 
                        required</strong></li>

                    <li><strong>Set the first field to autofocus</strong> so users can type without the keyboard</li>

                    <li><strong>Ensure every form control can be filled in using the keyboard</strong> for people
                    that do not have a mouse or joystick</li>

                    <li><strong>Adding tab index to complex forms</strong> so it's clear in which order fields should be filled</li>

                    <li><strong>Ensuring validation messages are screen readable</strong> since the built-in HTML browser message
                    are not screen-readable</li>
                </ul>

                <p> The major tags, attributes and purposes are: </p>
                <dl>
                    <dt>&lt;form&gt;</dt>
                    <dd>The <code>&lt;form&gt;</code> tag can have any content in it, such as paragraphs, headers or images.</dd>
                    <dd>They have 2 distinct important attributes...</dd>
                    <dd>1. <code>action</code>: Specifies where the request from the form should be sent. The value of the action 
                        attribute can be a relative or absolute URL. When we want to submit the form to the same site, it is typical
                        to use a relative URL.
                    </dd>
                    <dd>2. <code>method</code>: Specifies the HTTP method to be used in the HTTP request sent when the form is submitted (case sensitive).
                        Usually are GET and POST.
                    </dd>

                    <dt>&lt;label&gt;</dt>
                    <dd>Helps the user understand the purpose of the entry they wrote. To aid, the <code>for=""</code>
                    attribute is added so that it matches up with form control's <code>id=""</code></dd>

                    <dt>&lt;fieldset&gt;</dt>
                    <dd>It is used to group elements in a form, drawing a box around related elements.</dd>

                    <dt>&lt;legend&gt;</dt>
                    <dd>This tag represents a caption for the content of the fieldset. </dd>

                    <dt>&lt;input&gt;</dt>
                    <dd>The <code>&lt;input&gt;</code> tag is widely used to get user data within a form. Stands out a little from
                    other elements since it has an attribute <code>type=""</code> which changes the scope of how it is displayed,
                used and even what other attribute can be used. The other attribute is the <code>name=""</code> attribute, which shows
            how the server knows which part of the form each data item is associated with.</dd>

                    <dt>&lt;select&gt;</dt>
                    <dd>Utilized to provide user with a drop-down list of choices. The <code>name</code> attribute is used for 
                    this element when sending user choice in request. Within this tag, <code>&lt;option&gt;</code> tags are used
                to define the choices in the drop-down list. Finally, selected attribute will select Other option by default.</dd>
                    </dl>
                    <p> Ways to Improve Usability Are: </p>
                    <ul>
                        <li>Changing the default colors with fieldset and make them easier to read. Change default gray border of fieldset 
                            to another color and shape to make it easier for the reader to see.
                        </li>
                        <li>Adding a margin to provide breathing room above each fieldset, while padding inside the fieldset to keep the labels adding
                            controls from touching the edges
                        </li>
                        <li>To display labels above, assign the display to a block value, and shrink the font size a little</li>
                        <li>For people with larger fingers and arthritic hands, increase the font size and add padding</li>
                        <li>Another input is autofocus is because it places the cursor in first field for immediate typing, rather
                            than necessitating a mouse click or touch into the input
                        </li>
                        <li>A placeholder text needs updating to improve contrast, so a text color change could be desired</li>
                    </ul>
            </article>
            <article id="express">
                <h3>Express</h3>
                <p>The three technologies used in this class are: </p>
                <dl>
                    <dt>Node</dt>
                    <dd>Node.js is an open source, cross-platform runtime environment for developing server-side adding
                    networking applications. They are written in JavaScript, and can be ran on Node.js runtime on different 
                    operating systems. Node provides a rich library of various JavaScript modules, which makes Development
                    of web applications easier.
                    </dd>

                    <dt>npm</dt>
                    <dd>npm, which stands for Node Package Manager, is the world's largest Software Registry with over 800,000 code packages. 
                    Open-source developers use it to share software. There are three components of the npm. The website, Command Line Interface
                    and the registry. The website is used to discover packages, create profiles and manage other aspects of your npm 
                    experience. CLI runs from a terminal, and how most developers interact with npm. Registry is a large public database of 
                    JavaScript software and the meta-information surrounding it
                    </dd>

                    <dt>Express</dt>
                    <dd>Ahh yes, to round it off, my favorite technology out of the three. Express.js. Basically, it provides API's of various common
                        tasks that web apps need to do. Express helps the user to get, post and delete data. It also defines the ports and routes the data can take. Additionally,
                        it helps serve static files, such as /public folder, and creates templates that dynamically build responses incorporaing data. Finally, we can use 
                        middleware to handle requests within the routing pipeline
                    </dd>
            </dl>
            </article>
            <article id="javascript">
                <h3>JavaScript</h3>
                <ul>
                    <li> The main data types in JavaScript are numbers, boolean value (either true or false), strings, symbols,
                        special values (undefined and null) and objects.
                    </li>
                    <li>
                        Objects are a set of name-value pairs, and are used in JavaScript by using the CRUD framework, which is Create and Update, 
                        Read and Delete. Arrays are used as objects whose property names are strings '0', '1', etc. JSON, which is known as JavaScript
                        Object Notation, is used for exchanging data between applications.
                    </li>
                    <li>
                        In JavaScript, the conditionals used are if/elseif/else statements and switch statements. The if statements are very similar to other languages,
                        and are used to provide true or false expressions, with else if and else branches. The switch statement is similar to C, Java, etc. There is also the 
                        Ternary Operator, which is a very straightforward way to code a simple decision. There are also 2 sets of equality operators, they are strict and loose, 
                        but it is best to avoid using loose, as it will have automatic type conversion. Loops are very similar to other coding languages. In JavaScript, there is the 
                        while loop, do while loop, for loop, for of loop, and for in loop. The for of loop iterates over elements of an iterable value, and the for in loop is used to iterate
                        over properties of an object.
                    </li>
                    <li>
                        Object Oriented Programming has three elements. There is the identity, state and behavior. JavaScript has supported objects for a long time.
                        However, other programming languages declare classes and then create objects. But JavaScript provides a class syntax similar to other programming languages.
                        In JavaScript, the main scope is the modern class syntax.
                    </li>
                    <li>
                        Functional programming is considered "first-class" programming where functions are assigned to variables, defining functions that receive other functions as arguments,
                        and defining functions that return functions. Functional programming is based off of fundamental defining types. 
                    </li>
                </ul>
            </article>
            <article id="dom">
                <h3> DOM </h3>
                <p> DOM (Document Object Model) is a visual representation of a page's structure. The DOM, which is in the form of 
                    tree nodes, can be updated through both JavaScript and Express. In JavaScript, web browsers provide API methods to 
                   interact with and manipulate DOM. There are multiple methods that help search and query elements for the DOM. These all 
                  help return elements of certain aspects, such as .getElementId() returns the element of a specified ID attribute. Or .querySelector() returns
                   the first element matching the CSS selector. To modify the structure of DOM trees, you create nodes. There are two kinds of these nodes, text and element. 
                 You can also insert a node by appending, and you can also remove a node as well.  </p>

                 <p> Another cool thing about DOM is the event handlers, which help the modifier understand how a certain event is programmed. 
                    There are three parts of event handling: first, in which are the event that happened, secondly, where the event occured and how to proceed. Then there are events that are related 
                    to mouses, keyboards, focusing, and others. A browser can also pass objects according to handler events as well. All of these are used through JavaScript, which
                    help the modifier understand how to manipulate DOM nodes.
                 </p>
            </article>
        </>
    );
}
export default TopicsPage;
