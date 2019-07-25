const lightingHash=(data)=>{
return data+'*'
}
class Block{
    constructor(data,hash,lastHash){
        this.data=data
        this.hash=hash
        this.lastHash=lastHash

    }
}


class BlockChain{
    constructor(){
        const genesis=new Block('gen-data','gen-hash','gen-lasthash')
        this.chain=[genesis]
    }
    addBlock(data){
        const lastHash=this.chain[this.chain.length-1].hash
        const hash=lightingHash(data+lastHash)
        const block=new Block(data,hash,lastHash)
        this.chain.push(block)
    }
}
const fooBlockChain=new BlockChain()

fooBlockChain.addBlock('one')
fooBlockChain.addBlock('two')
fooBlockChain.addBlock('three')
fooBlockChain.addBlock('four')
console.log(fooBlockChain)