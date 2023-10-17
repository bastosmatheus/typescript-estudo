"use strict";
class Votation {
    constructor() {
        this._votationOptions = [];
    }
    addVotationOptions(votationOptions) {
        if (this.existLanguage(votationOptions.option))
            return;
        this._votationOptions.push(votationOptions);
    }
    vote(indexVotation) {
        if (!this._votationOptions[indexVotation])
            return;
        this._votationOptions[indexVotation].numberOfVotes++;
    }
    existLanguage(option) {
        const optionLowerCase = option.toLowerCase();
        for (let i = 0; i < this._votationOptions.length; i++) {
            const optionsLowerCase = this._votationOptions[i].option.toLowerCase();
            if (optionsLowerCase === optionLowerCase) {
                console.log(`This option ${option} already exists for voting.\n`);
                return true;
            }
        }
        return false;
    }
}
class VoteApp extends Votation {
    constructor(details) {
        super();
        this.details = details;
    }
    printVoteApp() {
        console.log(`${this.details} \n`);
        this._votationOptions.forEach((vote, index) => {
            console.log(`${index} - ${vote.option}: ${vote.numberOfVotes}`);
        });
        console.log(`\n`);
    }
}
const votation = new VoteApp("What's your favorite programming language?");
votation.addVotationOptions({ numberOfVotes: 0, option: "JavaScript" });
votation.addVotationOptions({ numberOfVotes: 0, option: "Leonsio" });
votation.vote(1);
votation.vote(0);
votation.printVoteApp();
const votationColor = new VoteApp("What's your favorite color?");
votationColor.addVotationOptions({ numberOfVotes: 0, option: "Green" });
votationColor.addVotationOptions({ numberOfVotes: 0, option: "Green" });
votationColor.printVoteApp();
