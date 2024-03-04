import React from 'react'

export const Checkout = () => {
  return (
    <div className="maincontainer">
      
        <div class="container">
          <div class="py-5 text-center">
            
            <h2>Registra tus datos de compra</h2>
          </div>
          <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Tu carrito</span>
                <span class="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Nombre del producto</h6>
                    <small class="text-muted">Audifonos</small>
                  </div>
                  <span class="text-muted">$12</span>
                </li>
                
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (MXN)</span>
                  <strong>$20</strong>
                </li>
              </ul>
              <form class="card p-2">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Promo code"/>
                  <div class="input-group-append">
                    <button type="button" class="btn btn-secondary">Redeem</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Detalles de pago</h4>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">Nombre</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                    <div class="invalid-feedback">
                      Nombre es requerido
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                    <div class="invalid-feedback">
                      El apellido es requerido
                    </div>
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="email">Email <span class="text-muted">(opcional)</span></label>
                  <input type="email" class="form-control" id="email" placeholder="usuario@example.com" />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address">Direccion</label>
                  <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address2">Direccion 2 <span class="text-muted">(Optional)</span></label>
                  <input type="text" class="form-control" id="address2" placeholder="Colonia o fraccionamiento" />
                </div>
                <div class="row">
                  <div class="col-md-5 mb-3">
                    <label for="country">Pais</label>
                    <select class="custom-select d-block w-100" id="country" required>
                      <option value="">Elige una opcion</option>
                      <option>Mexico</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="state">Estado</label>
                    <select class="custom-select d-block w-100" id="state" required>
                      <option value="">Elige una opcion</option>
                      <option>Aguascalientes</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="zip">Codigo postal</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required />
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
              
                
                <hr class="mb-4" />
                <h4 class="mb-3">Pago</h4>
                <div class="d-block my-3">
                  <div class="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required />
                    <label class="custom-control-label" for="credit">Tarjeta de credito</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required />
                    <label class="custom-control-label" for="debit">Tarjeta de debito</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required />
                    <label class="custom-control-label" for="paypal">Paypal</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="cc-name">Nombre</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required />
                    <small class="text-muted">Nombre en la tarjeta</small>
                    <div class="invalid-feedback">
                      Nombre en tarjeta es requerido
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="cc-number">Numero de tarjeta </label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required />
                    <div class="invalid-feedback">
                      Requerido
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">Expiracion</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                    <div class="invalid-feedback">
                      Expiracion requerida
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                    <div class="invalid-feedback">
                      Codigo de seguridad requerido
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />
                <button class="btn btn-primary btn-lg btn-block" type="button">Proceder al pago</button>
              </form>
            </div>
          </div>
         
        </div>
     
      </div>
  )
}
