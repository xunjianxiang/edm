'use strict'
class Man {
    constructor (money, price, capToBeerScale, bottleToBeerScale) {
        this.money = money
        this.total = {
            beer: 0,
            cap: 0,
            bottle: 0
        }
        this.current = {
            beer: 0,
            cap: 0,
            bottle: 0
        }
        this.scale = {
            money: price,
            cap: capToBeerScale,
            bottle: bottleToBeerScale
        }
        this.buy()
    }

    buy () {
        if (this.money < this.scale.money) return
        let num = Math.floor(this.money / this.scale.money)
        this.total.beer = this.current.beer = num
        this.money = this.money % this.scale.money
        console.log(`消费${this.scale.money * num}元购买${num}瓶啤酒，还剩${this.money}元`)
        this.drink()
    }

    drink () {
        if (!this.current.beer) {
            console.log(`没酒了，总共喝了${this.total.beer}瓶啤酒，当前剩余${this.current.cap}个瓶盖，${this.current.bottle}个瓶子`)
            return
        }

        let num = this.current.beer
        this.current.beer = 0
        this.current.cap += num
        this.total.cap += num
        this.current.bottle += num
        this.total.bottle += num

        console.log(`喝掉${num}瓶啤酒, 当前${this.current.cap}个瓶盖，${this.current.bottle}个瓶子`)

        this.capToBeer()
        this.bottleToBeer()
        this.drink()
    }

    capToBeer () {
        if (this.current.cap < this.scale.cap) return
        let num = Math.floor(this.current.cap / this.scale.cap)
        this.current.beer += num
        this.total.beer += num
        this.current.cap = this.current.cap % this.scale.cap
        console.log(`消费${this.scale.cap * num}个瓶盖兑换了${num}瓶啤酒, 还剩${this.current.cap}个瓶盖`)
    }

    bottleToBeer () {
        if (this.current.bottle < this.scale.bottle) return
        let num = Math.floor(this.current.bottle / this.scale.bottle)
        this.current.beer += num
        this.total.beer += num
        this.current.bottle = this.current.bottle % this.scale.bottle
        console.log(`消费${this.scale.bottle * num}个瓶子兑换了${num}瓶啤酒, 还剩${this.current.bottle}个瓶子`)
    }
}

new Man(10, 2, 4, 2)