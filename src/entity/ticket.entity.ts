import { Event } from './event.entity';
import { User } from './user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne } from 'typeorm';

@Entity('ticket')
export class Ticket {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length : 255})
    name!: string;

    @Column({type: 'varchar', length: 255})
    description!: string;

    @Column()
    price!: number;

    @Column({ type: 'boolean'})
    isChild!: boolean;

    @ManyToMany(type => User, user => user.tickets)
    users!: User[];

    @OneToOne(type => Event, event => event.ticket)
    event!: Event;

}
