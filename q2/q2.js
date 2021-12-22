class Media{
 constructor(name, publishDate, type){
     this.name=name
     this.publishDate = publishDate
     this.type=type
 }
}

class Book extends Media{

    constructor(name,publishDate,genre,numOfPages){
        super(name,publishDate,"print")
        this.numOfPages=numOfPages
        this.genre=genre

    }
}

class Film extends Media{

    constructor(name,publishDate,genre,isSeries,director){
        super(name,publishDate,"broadCast")
        this.isSeries = isSeries
        this.director = director
        this.genre = genre
    }
}

class Website extends Media {
    constructor(name,publishDate,address){
        super(name,publishDate,"Internet")
        this.address = address
    }

}


const harryPotter = new Book("harry potter","2000","ScienceFiction",300)
const lordOfRings = new Film ("Lord of Rings","2010" , "scienceFiction", false,"peter jackson")
const digikala = new Website("digikala","2005","www.digikala.com")