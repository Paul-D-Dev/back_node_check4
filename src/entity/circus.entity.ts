import { Employee } from './employee.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, JoinTable } from 'typeorm';
import { Address } from './address.entity';
import { Event } from './event.entity';

@Entity('circus')
export class Circus {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length : 255})
    name!: string;

    @Column({type: 'varchar', length: 255})
    phone!: string;

    @OneToMany( type => Employee, employee => employee.circus)
    @JoinColumn()
    employees!: Employee[];

    @OneToOne(type => Address, address => address.circus )
    @JoinColumn()
    address!: Address;

    @OneToMany(type => Event, event => event.circus)
    @JoinTable()
    events!: Event[];

}

