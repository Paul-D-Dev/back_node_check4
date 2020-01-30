import { Circus } from './circus.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('employee')
export class Employee {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length : 255})
    name!: string;

    @Column({type: 'varchar', length: 255})
    job!: string;

    @Column({type: 'text'})
    description?: string;

    @Column({type: 'varchar', length: 255, nullable: true})
    avatarUrl!: string;

    @ManyToOne(type => Circus, circus => circus.employees)
    circus!: Circus;
}

