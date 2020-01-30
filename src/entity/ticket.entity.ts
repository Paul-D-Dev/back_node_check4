import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from './event.entity';
import { User } from './user.entity';

@Entity('ticket')
export class Ticket {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length : 255})
    name!: string;

    @Column()
    price!: number;

    @Column()
    quantity!: number;

    @ManyToOne(type => User, user => user.tickets)
    user!: User;

    @ManyToOne(type => Event, event => event.tickets)
    @JoinColumn()
    event!: Event;

}
