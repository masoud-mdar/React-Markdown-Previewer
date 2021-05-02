import React from "react"
import marked from "marked"
import Child from "./Child"


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input:"# Welcome to my React Markdown Previewer! \n ## This is a sub-heading... \n ### And here's some other cool stuff: \n Heres some code, \n `<div></div>`, between 2 backticks. \n ``` \n // this is multi-line code: \n function anotherExample(firstLine, lastLine) { \n if (firstLine == '```' && lastLine == '```') { \n return multiLineCode; \n } } \n ``` \n You can also make text **bold** \n ... whoa! \n Or _italic_. \n Or \n ... wait for it... \n **_both!_** \n And feel free to go crazy \n ~~crossing stuff out~~. \n There's also [links](https://www.freecodecamp.com), \n and\n ddddddddd \n > Block Quotes! \n \n And if you want to get really crazy, \n \n even tables : \n \n Wild Header | Crazy Header | Another Header? \n ------------ | ------------- | ------------- \n Your content can | be here, and it | can be here.... And here. \n \n | Okay. | I think we get it.\n\n - And of course there are lists. \n - Some are bulleted. - \n \n With different indentation levels. - \n \n That look like this. \n \n 1. And there are numbererd lists too. \n 1. Use just 1s if you want! \n 1. And last but not least, let's not forget embedded images: \n \n ![FCC image w/ Text](https://www.freecodecamp.org/static/wide-image-f3e20fc9bd28e3cc95519402baf76826.png) ",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){

        this.setState(state => ({
            input: event.target.value,
        }))
    }

    shouldComponentUpdate(nextProps,nextState){
        if (nextState.input.length !== this.state.input.length){
            return true
        }

    }

    render(){
        const t = marked(this.state.input);
        const divElement = <div dangerouslySetInnerHTML ={{__html: t }} id="preview" className="preview-box"></div>
        
        return (
            <div className="app-container" >
                <textarea className="quote-box" id="editor" rows="10" cols="50" placeholder="write here" value={this.state.input} onChange={this.handleChange} ></textarea>
                <br />

                <Child text={divElement} />
                  
            </div>
        )
    }
}

export default App