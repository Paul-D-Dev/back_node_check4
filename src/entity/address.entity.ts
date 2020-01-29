import { Circus } from './circus.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity('address')
export class Address {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length: 100})
    street!: string;

    @Column({type: 'varchar', length: 50})
    town!: string;

    @Column()
    zip!: number;

    @Column({type: 'varchar', length: 255})
    x!: string;

    @Column({type: 'varchar', length: 255})
    y!: string;

    @OneToOne(type => Circus, circus => circus.address)
    circus!: Circus;

}

