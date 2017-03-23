import React, { Component } from 'react';

export default class BodyAbout extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>Our group is a part of the emerging global effort to understand, 
                manipulate and archive historical documents so that they are available to researchers in paleography, e.g. 
                liturgical texts, archaeology, and history. Our previous results include binarization of historical handwritten documents 
                and a preliminary work on writer identification and keyword searching in old documents that achieved excellent results. 
                Here we propose to develop new techniques in computer science to manipulate highly degraded documents in Hebrew and Arabic; 
                many of our methods will apply to other languages as well.</p>
                <p>The field of historical document analysy has already created many conferences and many journal papers, 
                to disseminate ideas and identify important questions The questions we propose to resolve are applicable to historical 
                documents in any language and from any time period, e.g., binarization of highly degraded documents, 
                segmentation of skewed and curved lines, and word spotting in both curved and highly degraded documents. 
                For several years we have been developing methods to digitally restore degraded historical documents in Hebrew and Arabic, 
                where our group has a unique combination of expertise. Our scientific expertise in computer vision, image processing, 
                computer graphics and computational geometry has already proven valuable to our colleagues in the humanities in answering 
                questions about Jewish liturgical texts and Arabic historical texts that advance scholarship in these fields. 
                Our experiments are conducted on degraded documents from the "Cairo Geniza", copies of which are located at 
                the national liturgy project at Ben-Gurion University, the "El-Aqsa" manuscript library, Jerusalem, and the "Al-Azar" 
                manuscript library, Cairo.</p>
                
            </div>
        )
    }


} 
 
