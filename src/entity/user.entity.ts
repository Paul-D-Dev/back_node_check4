import { Ticket } from './ticket.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne } from 'typeorm';
import { Circus } from './circus.entity';

export enum UserRole {
    ANONYMOUS = 'anonymous',
    USER = 'user',
    ADMIN = 'admin',
}
@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length : 255})
    name!: string;

    @Column({type: 'varchar', length: 255})
    email!: string;

    @Column({type: 'varchar', length: 255})
    password?: string;

    @Column({ type: Date})
    birthday?: Date;

    @Column({type: 'varchar', length: 255})
    avatar?: string;

    @Column({ type: 'enum', enum : UserRole, default : UserRole.ANONYMOUS})
    role!: UserRole;

    @Column({ type: 'boolean', default: false})
    activated?: boolean;

    @ManyToMany( type => Ticket, ticket => ticket.users)
    tickets!: Ticket[];

}

