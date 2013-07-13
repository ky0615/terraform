var should    = require('should')
var polymer   = require('../')

describe("errors", function(){

  var root = __dirname + "/fixtures/errors"
  var poly = polymer.root(root)

  describe(".less", function(){
    it("should get error if var missing in less", function(done){
      poly.render("less/novar.less", function(error, body){
        should.not.exist(body)
        should.exist(error)
        error.should.have.property('name')
        error.should.have.property('message')
        error.should.have.property('stack')
        done()
      })
    })

    it("should get errors if syntax not correct", function(done){
      poly.render("less/invalid.less", function(error, body){
        should.not.exist(body)
        should.exist(error)
        error.should.have.property('name')
        error.should.have.property('message')
        error.should.have.property('stack')
        done()
      })
    })
  })

  describe(".jade", function(){
    it("should get errors obj from jade", function(done){
      poly.render("jade/novar.jade", function(error, body){
        should.not.exist(body)
        should.exist(error)
        error.should.have.property('name')
        error.should.have.property('message')
        error.should.have.property('stack')
        done()
      })
    })
  })


})