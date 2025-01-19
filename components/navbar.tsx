"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ClipboardList } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <Link href="/"><ClipboardList className="h-6 w-6" /></Link>
          <Link href="/"><span className="font-bold">Planejamento</span></Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Início
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Formulários</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    <Link href="/admissao" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Admissões</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Enviar Novas admissões
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/desligamento" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Desligamentos</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Enviar Desligamentos
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/alteracaoHorarios" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Alteração de Horários</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Solicitar Alteração de Horarios
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/folgasForm" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Folgas</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Solicitar Folga
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/ajuste-escala" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Ajuste Atividade - Escala</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Ajuste Atividades
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/ferias" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Férias</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Solicitar Ferias
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/solicitacao-contratacao" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Solicitação de contratação</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Solicitar novas contratações
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Historico Solicitações</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    <Link href="/admissao" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Admissões</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Enviar Novas admissões
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/desligamento" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Desligamentos</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Enviar Desligamentos
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/alteracaoHorarios" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Alteração de Horários</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Solicitar Alteração de Horarios
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/folgasForm" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Folgas</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Solicitar Folga
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/ajuste-escala" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Ajuste Atividade - Escala</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Ajuste Atividades
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/ferias" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Férias</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Solicitar Ferias
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/solicitacao-contratacao" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Solicitação de contratação</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Solicitar novas contratações
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}