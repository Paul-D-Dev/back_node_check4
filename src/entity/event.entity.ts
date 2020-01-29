import { Ticket } from './ticket.entity';
import { Circus } from './circus.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity('event')
export class Event {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length : 255})
    name!: string;

    @Column({type: 'varchar', length: 255})
    description!: string;

    @Column({ type: 'timestamp'})
    date!: Date;

    @ManyToOne(type => Circus, circus => circus.events)
    circus!: Circus;

    @OneToOne(type => Ticket, ticket => ticket.event)
    ticket!: Ticket;

}

