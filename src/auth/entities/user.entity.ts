import { Product } from "src/products/entities";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn('uuid')    
    id: string;

    @Column('text',{
        unique: true
    })
    email: string;

    @Column('text',{
        select: false
    })
    password: string;

    @Column('text')
    fullName: string;

    @Column('bool',{
        default: true
    })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string[];

    @OneToMany(
        () => Product,
        (product)=> product.user
    )
    product: Product;

    @BeforeInsert()
    checkFieldsBeforeInsert(){
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldBeforeUpdate(){
        this.checkFieldsBeforeInsert();
    }
}


