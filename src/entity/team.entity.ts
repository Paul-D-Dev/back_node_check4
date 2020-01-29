import { Circus } from './circus.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('team')
export class Team {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length : 255})
    name!: string;

    @Column({type: 'varchar', length: 255})
    job!: string;

    @Column({type: 'varchar', length: 255})
    description?: string;

    @Column({type: 'varchar', length: 255})
    image!: string;

    @OneToOne(type => Circus, circus => circus.team)
    circus!: Circus;
}

