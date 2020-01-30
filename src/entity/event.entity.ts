import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Circus } from './circus.entity';
import { Ticket } from './ticket.entity';

@Entity('event')
export class Event {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length : 255})
    name!: string;

    @Column({type: 'text'})
    description!: string;

    @CreateDateColumn({ type: 'timestamp'})
    date!: Date;

    @Column({type: 'varchar', length: 255})
    image!: string;

    @Column()
    priceAdult!: number;

    @Column()
    quantity!: number;

    @ManyToOne(type => Circus, circus => circus.events)
    circus!: Circus;

    @OneToMany(type => Ticket, ticket => ticket.event)
    tickets!: Ticket;

    // add price

}

