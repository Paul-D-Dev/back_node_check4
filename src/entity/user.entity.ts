import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ticket } from './ticket.entity';

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

    @Column({type: 'varchar', length: 255, nullable: true})
    email!: string;

    @Column({type: 'varchar', length: 255, nullable: true})
    password!: string;

    @CreateDateColumn({ type: 'timestamp', nullable: true})
    birthday!: Date;

    @Column({type: 'varchar', length: 255, nullable: true})
    avatarUrl!: string;

    @Column({ type: 'enum', enum : UserRole, default : UserRole.ANONYMOUS})
    role!: UserRole;

    @Column({ type: 'boolean', default: false})
    activated?: boolean;

    @ManyToOne( type => Ticket, ticket => ticket.user)
    @JoinTable()
    tickets!: Ticket[];

}
